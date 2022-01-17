import { Meta, Story } from '@storybook/react';
import React from 'react';
import Input, { InputProps } from '.';
import NumberInput, { NumberInputProps } from './variants/number';
import TextInput, { TextInputProps } from './variants/text/text-input';

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		onChange: { action: 'change' },
	},
} as Meta<typeof Input>;

export const Default: Story<InputProps> = (args) => <Input {...args} />;

Default.args = {
	label: 'Default Input',
	type: 'text',
};

export const TextInputStory: Story<TextInputProps> = (args) => <TextInput {...args} />;

TextInputStory.storyName = 'Text Input';

TextInputStory.args = {
	label: 'Text Input',
	multiline: false,
	fullWidth: false,
};

export const NumberInputStory: Story<NumberInputProps> = (args) => <NumberInput {...args} />;

NumberInputStory.storyName = 'Number Input';