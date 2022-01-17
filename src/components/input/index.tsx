import React from 'react';
import NumberInput, { NumberInputProps } from './variants/number';
import TextInput, { TextInputProps } from './variants/text/text-input';

export type InputType = 'text' | 'number' | 'date';

export type GlobalInputProps<T extends InputType = InputType> = {
	type: T;
	id?: string;
	label?: string;
	helpText?: string;
	error?: boolean;
	fullWidth?: boolean;
	required?: boolean;
	initialValue?: InputValue<T>;
	validate?: (value: InputValue<T>) => string | undefined;
	onChange?: (value: InputValue<T>) => any;
};

export type InputValue<T extends InputType = InputType> = T extends 'text'
	? string | undefined
	: T extends 'number'
	? number | undefined
	: never;

export type InputProps<T extends InputType = InputType> = T extends 'text'
	? TextInputProps
	: T extends 'number'
	? NumberInputProps
	: never;

const Input: React.FC<InputProps> = (props) => {
	switch (props.type) {
		case 'text':
			return <TextInput {...props} />;
		case 'number':
			return <NumberInput {...props} />;
		default:
			throw TypeError('Invalid input type');
	}
};

export default Input;
export { default as NumberInput } from './variants/number';
export { default as TextInput } from './variants/text/text-input';

