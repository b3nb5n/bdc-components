import React from 'react';
import classes from './back-arrow.module.css';
import { IconButton } from '@material-ui/core';
import { ArrowBack as BackArrowIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';

interface BackArrowProps {
	returnLink: string;
}

export const BackArrow: React.FC<BackArrowProps> = ({ returnLink }) => (
	<Link to={returnLink} className={classes.back_arrow}>
		<IconButton aria-label="back">
			<BackArrowIcon />
		</IconButton>
	</Link>
);
