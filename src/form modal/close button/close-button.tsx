import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

interface CloseButtonProps {
	handleClose: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ handleClose }) => (
	<IconButton
		aria-label="close"
		onClick={handleClose}
		style={{
			position: 'absolute',
			left: '24px',
			top: '24px'
		}}
	>
		<CloseIcon />
	</IconButton>
);
