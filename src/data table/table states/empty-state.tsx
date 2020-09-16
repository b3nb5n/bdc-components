import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';

export const EmptyState: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.table_state_wrapper}>
			<Typography>There are no items in this table.</Typography>
		</div>
	);
};
