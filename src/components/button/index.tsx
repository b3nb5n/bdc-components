import React, { MouseEventHandler, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { theming, useTheme } from '../../theme';
import CircularProgress from '../progress/variants/circular';

export interface ButtonProps {
	loading?: boolean;
	manageLoading?: boolean;
	fullWidth?: boolean;
	variant?: 'primary' | 'secondary';
	style?: React.CSSProperties;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const useStyles = createUseStyles(
	(theme) => ({
		button: {
			boxSizing: 'border-box',
			border: 'none',
			fontSize: 16,
			padding: [8, 24],
			cursor: 'pointer',
			borderRadius: 8,
			backgroundColor: 'transparent',
			transform: 'translateY(0)',
			boxShadow: [0, 2, 4, 0, 'rgba(0, 0, 0, 50%)'],
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: 'min-content',
			transition: [
				['box-shadow', `120ms`, 'ease'],
				['transform', `120ms`, 'ease'],
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
				outline: [2, 'solid', 'black'],
				outlineOffset: 2,
			},
			'&.primary': {
				backgroundColor: 'black',
				color: 'white',
			},
			'&.secondary': {
				border: '2px solid black',
				padding: ['calc(0.5em - 2px)', 'calc(1.5em - 2px)'],
				color: 'black',
			},
		},
	}),
	{ theming }
);

const Button: React.FC<ButtonProps> = ({
	loading,
	manageLoading,
	variant = 'primary',
	style,
	fullWidth,
	onClick,
	children,
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
				...style,
			}}
		>
			<div
				style={{
					opacity: loading ? 0 : 1,
					width: 'fit-content',
					height: 18,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{children}
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
