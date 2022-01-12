import React, { MouseEventHandler } from 'react';
import { createUseStyles } from 'react-jss';

export interface ButtonProps {
	label: React.ReactNode;
	loading?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const useStyles = createUseStyles({
	button: {
		outline: 'none',
		border: 'none',
		padding: ['0.5rem', '1.5rem'],
		backgroundColor: 'black',
		color: 'white',
		fontWeight: 600,
		cursor: 'pointer',
		borderRadius: 4,
		transform: 'translateY(0)',
		transition: [
			['box-shadow', '120ms', 'ease'],
			['transform', '120ms', 'ease'],
		],
		boxShadow: [0, 2, 4, 0, 'rgba(0, 0, 0, 50%)'],
		'&:hover': {
			transform: 'translateY(-1px)',
			boxShadow: [0, 4, 6, 0, 'rgba(0, 0, 0, 30%)'],
		},
		'&:active': {
			transform: 'translateY(0)',
			boxShadow: 'none',
		},
	},
});

const Button: React.FC<ButtonProps> = ({ label, loading, onClick }) => {
	const styles = useStyles();

	return (
		<button onClick={onClick} className={styles.button}>
			<div style={{ opacity: loading ? 0 : 1, textTransform: 'capitalize' }}>
				{label}
			</div>
		</button>
	);
};

export default Button;
