import { TextField } from '@material-ui/core';
import React from 'react';

export interface TextInputStructure {
	type: 'text';
	name: string;
	label?: string;
	helpText?: string;
	required?: boolean;
	multiline?: boolean;
}

interface TextInputProps {
	fieldStructure: TextInputStructure;
	value: string;
	handleChange: (name: string, value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ fieldStructure, value, handleChange }) => (
	<TextField
		name={fieldStructure.name}
		label={fieldStructure.label || fieldStructure.name}
		helperText={fieldStructure.helpText}
		multiline={!!fieldStructure.multiline}
		value={value}
		rows={4}
		rowsMax={12}
		required={!!fieldStructure.required}
		onChange={event => handleChange(fieldStructure.name, event.target.value)}
		size="small"
		variant="outlined"
		margin="normal"
	/>
);
