import React from 'react';
import { InputProps, InputStructureGlobals } from '../..';

export interface FileInputStructure extends InputStructureGlobals<'file'> {
	fileTypes?: string[];
}

export type FileInputProps = Omit<InputProps<FileInputStructure>, 'type'>;

const FileInput: React.FC<FileInputProps> = ({}) => {
	return <input type='file' />;
};

export default FileInput;
