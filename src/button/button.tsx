import React, { useState } from 'react';
import { Button as MuiButton, CircularProgress } from '@material-ui/core';
import { useStyles } from './styles';

interface ButtonProps {
	action: () => Promise<any> | void;
}

export const Button: React.FC<ButtonProps> = ({ action, children }) => {
	const [ loading, setLoading ] = useState(false);

	const classes = useStyles();

	const handleClick = async () => {
		if (!loading) {
			setLoading(true);
			await action();
			setLoading(false);
		}
	};

	return (
		<div className={classes.button_wrapper}>
			<MuiButton
				variant="contained"
				color="primary"
				onClick={handleClick}
				className={classes.button}
				disableElevation
			>
				<div className={classes.children} style={{ opacity: loading ? 0 : 1 }}>
					{children}
				</div>
				{loading && <CircularProgress size={24} className={classes.button_spinner} />}
			</MuiButton>
		</div>
	);
};
