import React, { ReactElement } from 'react';
import classes from './page-header.module.css';
import { BackArrow } from './back arrow/back-arrow';
import { SearchInput } from './search input/search-input';
import { Button } from '../button/button';

export interface PageHeaderAction {
	name: string
	label: string | ReactElement
	action: () => void
}

interface PageHeaderProps {
	title: string;
	actions?: PageHeaderAction[]
	search?: (searchTerm: string) => void;
	returnLink?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, actions, search, returnLink }) => {
	const actionButtons = actions?.map(action => (
		<Button action={action.action} key={action.name} aria-label={action.name}>
			{action.label}
		</Button>
	))

	return (
		<div className={classes.page_header}>
			{returnLink ? <BackArrow returnLink={returnLink} /> : null}
			<h1 className={classes.page_title}>{title}</h1>
			{actions ? actionButtons : null}
			{search ? <SearchInput search={search} /> : null}
		</div>
	);
};
