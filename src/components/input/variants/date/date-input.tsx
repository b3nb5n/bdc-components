import React from 'react';
import { InputProps, InputStructureBase } from '../..';

export interface DateInputStructure extends InputStructureBase {
	type: 'date';
}

const DateInput: React.FC<InputProps<DateInputStructure>> = ({}) => {
	return <input type='date' />;
};

export default DateInput;
