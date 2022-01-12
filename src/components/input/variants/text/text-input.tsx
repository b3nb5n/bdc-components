import React from 'react';
import { InputProps, InputStructureBase } from '../..';

export interface TextInputStructure extends InputStructureBase {
	type: 'text';
	multiline?: boolean;
}

export type TextInputProps = InputProps<TextInputStructure>;

const TextInput: React.FC<TextInputProps> = ({}) => {
	return <input type='text' />;
};

export default TextInput;
