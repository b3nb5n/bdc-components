import React from 'react';
import { InputProps, InputStructureBase } from '../..';

export interface TextInputStructure extends InputStructureBase {
	type: 'text';
	multiline?: boolean;
}

export type TextInputProps = Omit<InputProps<TextInputStructure>, 'type'>;

const TextInput: React.FC<TextInputProps> = ({ onChange }) => {
	return (
		<input type='text' onChange={(e) => onChange && onChange(e.target.value)} />
	);
};

export default TextInput;
