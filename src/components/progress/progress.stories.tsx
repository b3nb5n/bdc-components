import { Meta, Story } from '@storybook/react';
import Progress, { ProgressProps, ProgressVariantProps } from '.';
import CircularProgress from './variants/circular';

export default {
	title: 'Progress',
	component: Progress,
	argTypes: {
		color: { control: { type: 'text' } },
	},
} as Meta<typeof Progress>;

export const Default: Story<ProgressProps> = (args) => <Progress {...args} />;

Default.args = {
	type: 'circular',
};

export const CircularProgressStory: Story<ProgressVariantProps> = (args) => (
	<CircularProgress {...args} />
);

CircularProgressStory.storyName = 'Circular Progress';

CircularProgressStory.args = {
	color: 'primary',
};
