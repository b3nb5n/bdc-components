import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { useStyles } from './styles';

interface SearchBarProps {
	search: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ search }) => {
	const classes = useStyles();

	return (
		<TextField
			className={classes.search_bar}
			placeholder="Search..."
			onChange={e => search(e.target.value)}
			variant="outlined"
			size="small"
			InputProps={{
				startAdornment: (
					<InputAdornment position="start" className={classes.search_icon}>
						<SearchIcon />
					</InputAdornment>
				)
			}}
		/>
	);
};
