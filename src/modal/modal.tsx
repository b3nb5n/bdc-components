import { IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { Button } from '../button/button';
import { Close as CloseIcon } from '@material-ui/icons';
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
					<IconButton
						aria-label="close"
						onClick={onClose}
						className={classes.close_button}
					>
						<CloseIcon />
					</IconButton>
					<Typography variant="h2">{title}</Typography>
				</div>

				<div className={classes.card_content}>{children}</div>

				{actions?.length && <div className={classes.card_actions}>{actionButtons}</div>}
			</div>
		</section>
	);
};
