import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { Button } from '../button/button';
import { SearchBar } from './search bar/search-bar';
import { useStyles } from './styles';
import { ArrowBack as BackIcon } from '@material-ui/icons';

interface PageHeaderProps {
	title: string;
	action?: () => void;
	actionLabel?: React.ReactElement;
	search?: (searchTerm: string) => void;
	returnLink?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	action,
	actionLabel,
	search,
	returnLink
}) => {
	const classes = useStyles();

	return (
		<div className={classes.header}>
			{returnLink && (
				<IconButton size="medium">
					<BackIcon />
				</IconButton>
			)}
			<Typography variant="h1" className={classes.page_title}>
				{title}
			</Typography>
			{action ? <Button action={action}>{actionLabel}</Button> : null}
			{search && <SearchBar search={search} />}
		</div>
	);
};
