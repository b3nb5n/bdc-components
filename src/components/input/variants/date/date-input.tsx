import React from 'react';
import { InputProps, InputStructureBase } from '../..';

export interface DateInputStructure extends InputStructureBase {
	type: 'date';
}

export type DateInputProps = Omit<InputProps<DateInputStructure>, 'type'>;

const DateInput: React.FC<DateInputProps> = ({}) => {
	return <input type='date' />;
};

export default DateInput;
