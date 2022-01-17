import React from 'react';
import { GlobalInputProps } from '../..';

export interface NumberInputProps extends GlobalInputProps<'number'> {}

const NumberInput: React.FC<NumberInputProps> = ({}) => {
	return <input type='number' />;
};

export default NumberInput;
