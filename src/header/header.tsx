import React from 'react';
import { IconButton } from '@material-ui/core';
import { ArrowBack as BackArrowIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';

interface HeaderProps {
	name: string;
	actionName?: string;
	action?: () => void;
	search?: (searchTerm: string) => void;
	returnLink?: string;
}

export const Header: React.FC<HeaderProps> = ({ name, action, search, returnLink }) => {
	return (
		<div>
			{returnLink ? (
				<Link to={returnLink}>
					<IconButton aria-label="back">
						<BackArrowIcon />
					</IconButton>
				</Link>
			) : null}
			<h1>{name}</h1>
		</div>
	);
};
