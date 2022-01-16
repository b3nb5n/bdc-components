import React from 'react';
import { InputProps, InputStructureGlobals } from '../..';

export interface OptionInputStructure extends InputStructureGlobals<'option'> {
	multi?: boolean;
	options: string[];
}

export interface OptionInputProps
	extends Omit<InputProps<OptionInputStructure>, 'type'> {
	filter?: (option: string, searchTerm: string) => boolean;
}

const OptionInput: React.FC<OptionInputProps> = ({}) => {
	return <select />;
};

export default OptionInput;
