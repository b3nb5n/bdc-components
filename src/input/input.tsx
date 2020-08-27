import React from 'react';
import styles from './input.module.css';

interface InputProps {
	name: string;
	inputType?: 'text' | 'email' | 'tel' | 'number';
	multiline?: boolean;
	value?: string | number;
	label?: string;
}

export const Input: React.FC<InputProps> = ({ name, inputType, multiline, value, label }) => {
	return (
		<div className={styles.input_wrap}>
			<b>{label || name}</b>
			{multiline ? (
				<textarea name={name} defaultValue={value} />
			) : (
				<input type={inputType || 'text'} name={name} defaultValue={value} />
			)}
		</div>
	);
};
