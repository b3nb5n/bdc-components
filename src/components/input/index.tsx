import React from 'react';
import DateInput, { DateInputStructure } from './variants/date/date-input';
import FileInput, { FileInputStructure } from './variants/file/file-input';
import OptionInput, { OptionInputStructure } from './variants/option/option-input';
import TextInput, { TextInputStructure } from './variants/text/text-input';

export type InputType = 'text' | 'option' | 'date' | 'file';

export interface InputStructureBase {
	name: string;
	type: InputType;
	required?: boolean;
}

export type InputStructure =
	| TextInputStructure
	| OptionInputStructure
	| DateInputStructure
	| FileInputStructure;

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
		: null;

export type InputProps<T extends InputStructure = InputStructure> = T & {
	fullWidth?: boolean;
	onChange?: (value: InputValue<T>) => void;
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

