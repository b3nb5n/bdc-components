import React from 'react';
import { InputProps, InputStructureGlobals } from '../..';

export interface DateInputStructure extends InputStructureGlobals<'date'> {}

export type DateInputProps = Omit<InputProps<DateInputStructure>, 'type'>;

const DateInput: React.FC<DateInputProps> = ({}) => {
	return <input type='date' />;
};

export default DateInput;
