import React from 'react';
import DateInput, { DateInputStructure } from './variants/date/date-input';
import FileInput, { FileInputStructure } from './variants/file/file-input';
import OptionInput, { OptionInputStructure } from './variants/option/option-input';
import TextInput, { TextInputStructure } from './variants/text/text-input';

export type InputType = 'text' | 'option' | 'date' | 'file';

export interface InputStructureGlobals<T extends InputType = InputType> {
	type: T;
	label?: string;
	initialValue?: InitialValue<InputStructure<T>>;
	required?: boolean;
	validate?: (value: InputValue<InputStructure<T>>) => string | undefined;
	onChange?: (value: InputValue<InputStructure<T>>) => any;
}

export type InputStructure<T extends InputType = InputType> = T extends 'text'
	? TextInputStructure
	: T extends 'option'
	? OptionInputStructure
	: T extends 'date'
	? DateInputStructure
	: T extends 'file'
	? FileInputStructure
	: never;

export type InputValue<T extends InputStructure = InputStructure> =
	T extends TextInputStructure & { required: true }
		? string
		: T extends TextInputStructure
		? string | undefined
		: T extends OptionInputStructure & { multi: true }
		? Array<T['options'][number]>
		: T extends OptionInputStructure & { required: true }
		? T['options'][number]
		: T extends OptionInputStructure
		? T['options'][number] | undefined
		: T extends DateInputStructure & { required: true }
		? Date
		: T extends DateInputStructure
		? Date | undefined
		: T extends FileInputStructure & { required: true }
		? File
		: T extends FileInputStructure
		? File | undefined
		: never;

export type InitialValue<T extends InputStructure = InputStructure> = NonNullable<
	InputValue<T>
>;

export type InputProps<T extends InputStructure = InputStructure> = T & {
	label: string;
	fullWidth?: boolean;
};

const Input: React.FC<InputProps> = (props) => {
	switch (props.type) {
		case 'text':
			return <TextInput {...props} />;
		case 'option':
			return <OptionInput {...props} />;
		case 'date':
			return <DateInput {...props} />;
		case 'file':
			return <FileInput {...props} />;
		default:
			throw TypeError('Invalid input type');
	}
};

export default Input;
export { default as DateInput } from './variants/date/date-input';
export { default as FileInput } from './variants/file/file-input';
export { default as OptionInput } from './variants/option/option-input';
export { default as TextInput } from './variants/text/text-input';

