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
		name: { type: 'text' },
		email: { type: 'text' },
		// birthday: { type: 'date' },
	},
};
