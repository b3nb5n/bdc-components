import React from 'react';
import { InputProps, InputStructureBase } from '../..';

export interface FileInputStructure extends InputStructureBase {
	type: 'file';
	fileTypes?: string[];
}

export type FileInputProps = Omit<InputProps<FileInputStructure>, 'type'>;

const FileInput: React.FC<FileInputProps> = ({}) => {
	return <input type='file' />;
};

export default FileInput;
