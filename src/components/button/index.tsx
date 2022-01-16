import React, { MouseEventHandler, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { theming, useTheme } from '../../theme';
import CircularProgress from '../progress/variants/circular';
import Text from '../text';

export interface ButtonProps {
	label: React.ReactNode;
	loading?: boolean;
	manageLoading?: boolean;
	fullWidth?: boolean;
	variant?: 'primary' | 'secondary';
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const useStyles = createUseStyles(
	(theme) => ({
		button: {
			boxSizing: 'border-box',
			border: 'none',
			fontSize: theme.typography.button.fontSize,
			padding: ['0.5em', '1.5em'],
			cursor: 'pointer',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: 'transparent',
			transform: 'translateY(0)',
			boxShadow: [0, 2, 4, 0, 'rgba(0, 0, 0, 50%)'],
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
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
			'&:focus-visible': {
				outline: [2, 'solid', theme.color.primary.toString()],
				outlineOffset: 2,
			},
			'&.primary': {
				backgroundColor: theme.color.primary.toString(),
				color: theme.color.primary.getContrastText().toString(),
			},
			'&.secondary': {
				border: '2px solid black',
				padding: ['calc(0.5em - 2px)', 'calc(1.5em - 2px)'],
				color: theme.color.primary.toString(),
			},
		},
	}),
	{ theming }
);

const Button: React.FC<ButtonProps> = ({
	label,
	loading,
	manageLoading,
	variant = 'primary',
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
			className={`${classes.button} ${variant}`}
			style={{
				pointerEvents: loading ? 'none' : 'initial',
				width: fullWidth ? '100%' : 'initial',
			}}
		>
			<div style={{ opacity: loading ? 0 : 1 }}>
				<Text variant='button'>{label}</Text>
			</div>
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
