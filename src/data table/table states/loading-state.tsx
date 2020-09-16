import React from 'react';
import { useStyles } from './styles';
import { CircularProgress } from '@material-ui/core';

export const LoadingState: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.table_state_wrapper}>
			<CircularProgress />
		</div>
	);
};
