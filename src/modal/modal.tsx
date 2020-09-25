import { Typography } from '@material-ui/core';
import React from 'react';
import { Button } from '../button/button';
import { CloseButton } from './close button/close-button';
import { useStyles } from './styles';

export type ModalAction = {
	label: React.ReactNode;
	action: () => Promise<void> | void;
};

interface ModalProps {
	title: string;
	onClose: () => void;
	actions?: ModalAction[];
}

export const Modal: React.FC<ModalProps> = ({ title, onClose, actions, children }) => {
	const classes = useStyles();

	const actionButtons = actions?.map((action, i) => (
		<Button action={action.action} key={i}>{action.label}</Button>
	));

	return (
		<section className={classes.scrimming}>
			<div className={classes.card}>
				<div className={classes.card_head}>
					<CloseButton handleClose={onClose} />
					<Typography variant="h2">{title}</Typography>
				</div>

				<div className={classes.card_content}>{children}</div>

				<div className={classes.card_actions}>{actionButtons}</div>
			</div>
		</section>
	);
};
