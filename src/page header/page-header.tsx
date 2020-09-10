import React from 'react';
import classes from './page-header.module.css';
import { BackArrow } from './back arrow/back-arrow';
import { SearchInput } from './search input/search-input';

interface PageHeaderProps {
	title: string;
	action?: () => void;
	search?: (searchTerm: string) => void;
	returnLink?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, action, search, returnLink }) => {
	return (
		<div className={classes.page_header}>
			{returnLink ? <BackArrow returnLink={returnLink} /> : null}
			<h1>{title}</h1>
			{action ? null : null}
			{search ? <SearchInput search={search} /> : null}
		</div>
	);
};
