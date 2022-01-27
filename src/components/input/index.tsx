import React from 'react';
import TextInput, { TextInputStructure } from './variants/text/text-input';

export type InputType = 'text' | 'number' | 'date';

export type GlobalInputProps<T extends InputType = InputType> = {
	type: T;
	label?: string;
	fullWidth?: boolean;
	initialValue?: NonNullable<InputValue<T>>;
	errorMessage?: string;
	required?: boolean;
	validateOn?: 'change' | 'blur' | 'none';
	validate?: (value: InputValue<T>) => string | undefined;
	onChange?: (value: InputValue<T>) => any;
};

export interface Input {
	type: InputType;
	required?: boolean;
}

interface TextInput extends Input {
	multiline?: boolean;
}

export type InputValue<T extends InputType = InputType> = T extends 'text'
	? string | undefined
	: T extends 'number'
	? number | undefined
	: never;

export type InputProps<T extends InputType = InputType> = T extends 'text'
	? TextInputStructure
	: never;

export const validateField = <T extends InputProps>(
	{ validate, required }: T,
	value: InputValue<T['type']>
) => {
	if (required && !value) return 'required';
	// @ts-ignore
	if (validate) return validate(value);
	return undefined;
};

const Input: React.FC<InputProps> = (props) => {
	switch (props.type) {
		case 'text':
			return <TextInput {...props} />;
		default:
			throw TypeError('Invalid input type');
	}
};

export default Input;
export { default as TextInput } from './variants/text/text-input';

