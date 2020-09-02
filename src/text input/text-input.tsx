import React from 'react';
import styles from './input.module.css';

export interface TextInputProps {
	type: 'text';
	name: string;
	label?: string;
	helpText?: string;
	required?: boolean;
	multiline?: boolean;
	minCharacters?: number;
	maxCharacters?: number;
}

export const TextInput: React.FC<TextInputProps> = ({
	name,
	label,
	helpText,
	required,
	multiline,
	minCharacters,
	maxCharacters
}) => {
	return (
		<div className={styles.input_wrap}>
			<b>{label || name}</b>
			{multiline ? <textarea name={name} /> : <input name={name} />}
		</div>
	);
};
