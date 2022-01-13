import { Meta, Story } from '@storybook/react';
import React from 'react';
import Input, { InputProps } from '.';
import DateInput, { DateInputProps } from './variants/date/date-input';
import FileInput, { FileInputProps } from './variants/file/file-input';
import OptionInput, { OptionInputProps } from './variants/option/option-input';
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
	name: 'Default Input',
	type: 'text',
};

export const TextInputStory: Story<TextInputProps> = (args) => (
	<TextInput {...args} />
);

TextInputStory.storyName = 'Text Input';

TextInputStory.argTypes = {
	name: { type: 'string' },
	multiline: { type: 'boolean' },
};

TextInputStory.args = {
	name: 'Text Input',
	multiline: false,
};

export const OptionInputStory: Story<OptionInputProps> = (args) => (
	<OptionInput {...args} />
);

OptionInputStory.storyName = 'Option Input';

OptionInputStory.args = {
	name: 'Option Input',
	options: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
	multi: false,
};

OptionInputStory.argTypes = {
	required: { type: 'boolean' },
	filter: { type: 'function' },
};

export const DateInputStory: Story<DateInputProps> = (args) => (
	<DateInput {...args} />
);

DateInputStory.storyName = 'Date Input';

DateInputStory.args = {
	name: 'Date Input',
};

export const FileInputStory: Story<FileInputProps> = (args) => (
	<FileInput {...args} />
);

FileInputStory.storyName = 'File Input';

FileInputStory.args = {
	name: 'File Input',
};