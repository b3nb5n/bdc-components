import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BiPlus as PlusIcon } from 'react-icons/bi';
import PageHeader, { PageHeaderProps } from '.';

export default {
	title: 'PageHeader',
	component: PageHeader,
} as Meta<typeof PageHeader>;

export const Default: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

Default.args = {
	title: 'Page Header',
	actionLabel: <PlusIcon color='white' size={16} />,
};
