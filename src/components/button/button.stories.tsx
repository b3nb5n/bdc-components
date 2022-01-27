import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from '.';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		variant: {
			options: ['primary', 'secondary'],
			control: { type: 'select' },
		},
		loading: { control: { type: 'boolean' } },
		manageLoading: { control: { type: 'boolean' } },
		fullWidth: { control: { type: 'boolean' } },
		onClick: { action: 'click' },
	},
} as Meta<typeof Button>;

export const Default: Story<ButtonProps> = (args) => <Button {...args}>Default</Button>;

export const ManagedButton: Story<ButtonProps> = (args) => (
	<Button
		{...args}
		manageLoading
		onClick={() => new Promise((resolve) => setTimeout(resolve, 1000))}
	>
		Managed Loading
	</Button>
);

export const SecondaryButton: Story<ButtonProps> = (args) => (
	<Button {...args}>Secondary</Button>
);

SecondaryButton.args = {
	variant: 'secondary',
};