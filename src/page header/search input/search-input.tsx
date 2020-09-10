import React from 'react';
import classes from './search-input.module.css';
import { TextField, InputAdornment } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

interface SearchInputProps {
	search: (searchTerm: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ search }) => (
	<TextField
		placeholder="Search..."
		className={classes.search_input}
		onChange={e => search(e.target.value)}
		InputProps={{
			startAdornment: (
				<InputAdornment position="start">
					<SearchIcon />
				</InputAdornment>
			)
		}}
	/>
);
