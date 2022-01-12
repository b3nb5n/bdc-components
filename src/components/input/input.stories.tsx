import { Meta, Story } from '@storybook/react';
import React from 'react';
import Input, { InputProps } from '.';

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
};

export default meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
	type: 'text',
	name: 'text input',
	multiline: false,
};

export const OptionInput = Template.bind({});
OptionInput.args = {
	type: 'option',
	name: 'option input',
	options: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
};

export const DateInput = Template.bind({});
DateInput.args = {
	type: 'date',
	name: 'date input',
};

export const FileInput = Template.bind({});
FileInput.args = {
	type: 'file',
	name: 'file input',
};
