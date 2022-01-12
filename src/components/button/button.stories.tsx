import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from '.';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const TextButton = Template.bind({});
TextButton.args = {
	label: 'Text Button',
	loading: false,
	onClick: () => {},
};
