import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '..';
import { theming } from '../../theme';
import Text from '../text';

export interface ModalProps {
	open: boolean;
	title: string;
}

const useStyles = createUseStyles(
	(theme) => ({
		scrimming: {
			boxSizing: 'border-box',
			position: 'fixed',
			zIndex: 10,
			inset: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: 'rgba(0, 0, 0, 0.6)',
			backdropFilter: 'blur(3px)',
		},
		card: {
			boxSizing: 'border-box',
			width: '80%',
			maxWidth: 480,
			minWidth: 360,
			maxHeight: 'calc(100vh - 120px)',
			backgroundColor: theme.color.background.toString(),
			boxShadow: [0, 12, 12, -6, 'black'],
			position: 'relative',
			overflowX: 'hidden',
			overflowY: 'auto',
			borderRadius: theme.shape.borderRadius * 3,
		},
		head: {
			boxSizing: 'border-box',
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			background:
				'linear-gradient(#fff, #fff, rgba(255, 255, 255, 90%), rgba(255, 255, 255, 20%))',
			backdropFilter: 'blur(1px)',
			position: 'sticky',
			top: 0,
			padding: [40, 60, 15],
			zIndex: 2,
		},
		content: { boxSizing: 'border-box', padding: [0, 60, 20], width: '100%' },
		actions: {
			boxSizing: 'border-box',
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			backgroundColor: 'white',
			position: 'sticky',
			zIndex: 3,
			bottom: 0,
			padding: [24, 54, 24, 60],
			boxShadow: [0, -2, 7, -6, 'black'],
		},
	}),
	{ theming }
);

const Modal: React.FC<ModalProps> = ({ open, title, children }) => {
	const classes = useStyles();

	if (!open) return null;
	return (
		<div role='dialog' className={classes.scrimming}>
			<div className={classes.card}>
				<div className={classes.head}>
					<Text variant='h2'>{title}</Text>
				</div>
				<div className={classes.content}>{children}</div>
				<div className={classes.actions}>
					<Button label='Submit' />
				</div>
			</div>
		</div>
	);
};

export default Modal;
