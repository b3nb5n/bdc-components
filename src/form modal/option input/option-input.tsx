import React from 'react';
import { Field } from '../form-modal';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

export interface OptionFieldStructure extends Field {
	type: 'option';
	options: string[];
	multi?: boolean;
}

interface OptionInputProps {
	fieldStructure: OptionFieldStructure;
	name: string;
	value: string | string[] | null;
	error?: string;
	handleChange: (name: string, value: string | string[] | null) => void;
}

export const OptionInput: React.FC<OptionInputProps> = ({ fieldStructure, name, value, error, handleChange }) => (
	<Autocomplete
		multiple={!!fieldStructure.multi}
		options={fieldStructure.options}
		value={value}
		getOptionLabel={(option: string) => option}
		onChange={(_event, value) => handleChange(name, value)}
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
				label={fieldStructure.label || name}
				helperText={error || fieldStructure.helpText}
			/>
		)}
	/>
);
