import React, { MouseEventHandler, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Text } from '..';
import CircularProgress from '../progress/variants/circular';

export interface ButtonProps {
	loading?: boolean;
	manageLoading?: boolean;
	fullWidth?: boolean;
	variant?: 'primary' | 'secondary';
	style?: React.CSSProperties;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const useStyles = createUseStyles({
	button: {
		boxSizing: 'border-box',
		border: 'none',
		padding: [12, 32],
		cursor: 'pointer',
		backgroundColor: 'transparent',
		transform: 'translateY(0)',
		borderRadius: 6,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 'min-content',
		transition: [['transform', `120ms`, 'ease']],
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
			padding: [6, 22],
			color: 'black',
		},
	},
});

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

	const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
		if (!onClick || loading) return;
		setManagedLoading(true);
		await onClick(e);
		setManagedLoading(false);
	};

	const classes = useStyles();

	return (
		<button
			onClick={handleClick}
			className={`${classes.button} ${variant}`}
			style={{
				pointerEvents: loading ? 'none' : undefined,
				width: fullWidth ? '100%' : undefined,
				...style,
			}}
		>
			<Text variant='button' style={{ opacity: loading ? 0 : 1 }}>
				{children}
			</Text>

			{loading && (
				<Text variant='button' style={{ position: 'absolute', top: 'auto', left: 'auto' }}>
					<CircularProgress color='onPrimary' />
				</Text>
			)}
		</button>
	);
};

export default Button;
