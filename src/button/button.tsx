import React, { useState } from 'react';
import classes from './button.module.css';
import { Button as MuiButton, CircularProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

interface ButtonProps {
	action: () => Promise<any> | void;
}

export const Button: React.FC<ButtonProps> = ({ action, children }) => {
	const [ loading, setLoading ] = useState(false);

	const handleClick = async () => {
		setLoading(true);
		await action();
		setLoading(false);
	};

	const theme = useTheme();
	const spinnerColor = theme.palette.primary.contrastText;

	const childrenStyle = {
		display: 'flex',
		opacity: loading ? 0 : 1
	};

	const buttonStyle = {
		margin: '0 6px',
		padding: '6px 24px'
	};

	return (
		<div className={classes.button_wrapper}>
			<MuiButton variant="contained" color="primary" onClick={handleClick} style={buttonStyle} disabled={loading}>
				<div style={childrenStyle}>{children}</div>
				{loading && (
					<CircularProgress size={24} className={classes.button_spinner} style={{ color: spinnerColor }} />
				)}
			</MuiButton>
		</div>
	);
};
