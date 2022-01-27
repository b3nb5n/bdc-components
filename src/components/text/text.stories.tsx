import { Meta, Story } from '@storybook/react';
import React from 'react';
import TextComponent, { TextProps } from '.';

export default {
	title: 'Text',
	component: TextComponent,
	argTypes: {
		variant: {
			options: ['h1', 'h2', 'h3', 'h4', 'body', 'label', 'button'],
			control: { type: 'select' },
		},
	},
} as Meta<typeof TextComponent>;

export const Text: Story<TextProps> = (args) => (
	<TextComponent {...args}>Hello, world!</TextComponent>
);

Text.args = {
	variant: 'body',
};
