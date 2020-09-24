import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '../button/button';
import { SearchBar } from './search bar/search-bar';
import { useStyles } from './styles';

interface PageHeaderProps {
	title: string;
	action?: () => void;
	actionLabel?: React.ReactElement;
	search?: (searchTerm: string) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	action,
	actionLabel,
	search
}) => {
	const classes = useStyles();

	return (
		<div className={classes.header}>
			<Typography variant="h1" className={classes.page_title}>
				{title}
			</Typography>
			{action ? <Button action={action}>{actionLabel}</Button> : null}
			{search && <SearchBar search={search} />}
		</div>
	);
};
