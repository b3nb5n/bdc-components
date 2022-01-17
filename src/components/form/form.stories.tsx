import { Meta, Story } from '@storybook/react';
import React from 'react';
import Form, { FormProps } from '.';

export default {
	title: 'Form',
	component: Form,
} as Meta<typeof Form>;

export const Default: Story<FormProps> = (args) => <Form {...args} />;

Default.args = {
	structure: {
		name: { type: 'text', required: true },
		email: {
			type: 'text',
			required: true,
			validate: (value) => {
				if (!/^\w+@\w+\.\w+$/.test(value)) return 'invalid email';
			},
		},
	},
	onSubmit: () => new Promise((resolve) => setTimeout(resolve, 2000)),
	validate: () => 'Global error message lorem ipsum doler sit amet consectetur',
};
