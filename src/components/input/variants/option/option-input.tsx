import React from 'react';
import { InputProps, InputStructureBase } from '../..';

export interface OptionInputStructure extends InputStructureBase {
	type: 'option';
	multi?: boolean;
	options: string[];
}

export interface OptionInputProps extends InputProps<OptionInputStructure> {
	filter?: (option: string, searchTerm: string) => boolean;
}

const OptionInput: React.FC<OptionInputProps> = ({}) => {
	return <select />;
};

export default OptionInput;
