import { Meta, Story } from '@storybook/react';
import Progress, { ProgressProps, ProgressVariantProps } from '.';
import CircularProgress from './variants/circular';
import EllipsisProgress from './variants/ellipsis';

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

export const EllipsisProgressStory: Story<ProgressVariantProps> = (args) => (
	<EllipsisProgress {...args} />
);

EllipsisProgressStory.storyName = 'Ellipsis Progress';

EllipsisProgressStory.args = {
	color: 'primary',
};
