import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from '.';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		onClick: { action: 'click' },
	},
} as Meta<typeof Button>;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
	label: 'default',
	loading: false,
};
