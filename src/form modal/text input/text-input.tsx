import { TextField } from '@material-ui/core';
import { Field } from '../form-modal';
import React from 'react';

export interface TextFieldStructure extends Field {
	type: 'text';
	multiline?: boolean;
}

interface TextInputProps {
	fieldStructure: TextFieldStructure;
	name: string;
	value: string;
	error?: string;
	handleChange: (name: string, value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ fieldStructure, name, value, error, handleChange }) => (
	<TextField
		name={name}
		label={fieldStructure.label || name}
		helperText={error || fieldStructure.helpText}
		multiline={!!fieldStructure.multiline}
		value={value}
		error={!!error}
		rows={4}
		rowsMax={12}
		onChange={event => handleChange(name, event.target.value)}
		size="small"
		variant="outlined"
		margin="normal"
	/>
);
