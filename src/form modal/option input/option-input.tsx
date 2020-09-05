import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';

export interface OptionInputStructure {
	type: 'option';
	name: string;
	label?: string;
	helpText?: string;
	required?: boolean;
	options: string[];
	multi?: boolean;
}

interface OptionInputProps {
	fieldStructure: OptionInputStructure;
	value: string | string[] | null;
	error?: string;
	handleChange: (name: string, value: string | string[] | null) => void;
}

export const OptionInput: React.FC<OptionInputProps> = ({ fieldStructure, value, error, handleChange }) => (
	<Autocomplete
		multiple={!!fieldStructure.multi}
		options={fieldStructure.options}
		value={value}
		getOptionLabel={(option: string) => option}
		onChange={(_event, value) => handleChange(fieldStructure.name, value)}
		blurOnSelect={!fieldStructure.multi}
		size="small"
		filterSelectedOptions
		clearOnBlur
		renderInput={params => (
			<TextField
				{...params}
				variant="outlined"
				margin="normal"
				size="small"
				error={!!error}
				label={fieldStructure.label || fieldStructure.name}
				helperText={error || fieldStructure.helpText}
			/>
		)}
	/>
);
