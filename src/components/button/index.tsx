import React, { MouseEventHandler, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { theming, useTheme } from '../../theme';
import CircularProgress from '../progress/variants/circular';

export interface ButtonProps {
	label: React.ReactNode;
	loading?: boolean;
	manageLoading?: boolean;
	fullWidth?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const useStyles = createUseStyles(
	(theme) => ({
		button: {
			boxSizing: 'border-box',
			outline: 'none',
			border: 'none',
			padding: ['0.5rem', '1.5rem'],
			backgroundColor: theme.color.primary.toString(),
			color: theme.color.primary.getContrastText().toString(),
			cursor: 'pointer',
			borderRadius: theme.shape.borderRadius,
			transform: 'translateY(0)',
			boxShadow: [0, 2, 4, 0, 'rgba(0, 0, 0, 50%)'],
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			...theme.typography.button,
			transition: [
				['box-shadow', `${120 / theme.motion.animationSpeed}ms`, 'ease'],
				['transform', `${120 / theme.motion.animationSpeed}ms`, 'ease'],
			],
			'&:hover': {
				transform: 'translateY(-1px)',
				boxShadow: [0, 4, 6, 0, 'rgba(0, 0, 0, 30%)'],
			},
			'&:active': {
				transform: 'translateY(0)',
				boxShadow: 'none',
			},
		},
	}),
	{ theming }
);

const Button: React.FC<ButtonProps> = ({
	label,
	loading,
	manageLoading,
	fullWidth,
	onClick,
}) => {
	const [managedLoading, setManagedLoading] = useState(false);
	loading = manageLoading ? managedLoading : loading;

	const theme = useTheme();
	const classes = useStyles();

	const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
		if (!onClick || loading) return;
		setManagedLoading(true);
		await onClick(e);
		setManagedLoading(false);
	};

	return (
		<button
			onClick={handleClick}
			className={classes.button}
			style={{
				pointerEvents: loading ? 'none' : 'initial',
				width: fullWidth ? '100%' : 'initial',
			}}
		>
			<div style={{ opacity: loading ? 0 : 1, verticalAlign: 'middle' }}>{label}</div>
			{loading && (
				<div
					style={{
						height: `${theme.typography.button.lineHeight}em`,
						position: 'absolute',
						top: 'auto',
						left: 'auto',
					}}
				>
					<CircularProgress color='onPrimary' />
				</div>
			)}
		</button>
	);
};

export default Button;
