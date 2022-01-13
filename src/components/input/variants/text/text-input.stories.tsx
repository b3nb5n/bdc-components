import { Meta, Story } from '@storybook/react';
import React from 'react';
import TextInput, { TextInputProps } from './text-input';

export default {
	title: 'Input',
	component: TextInput,
} as Meta<typeof TextInput>;

export const Default: Story<TextInputProps> = (args) => <TextInput {...args} />;

Default.argTypes = {
	name: { type: 'string', name: 'Name' },
	multiline: { type: 'boolean', name: 'Multiline' },
	onChange: { action: 'changed' },
};

Default.args = {
	name: 'Text Input',
	multiline: false,
};

// export const DateInput = Template.bind({});
// DateInput.args = {
// 	type: 'date',
// 	name: 'date input',
// };

// export const FileInput = Template.bind({});
// FileInput.args = {
// 	type: 'file',
// 	name: 'file input',
// };
