import React from 'react';
import { InputStructureBase } from '../..';

export interface FileInputStructure extends InputStructureBase {
	type: 'file';
	fileTypes: string[];
}

export interface FileInputProps {}

const FileInput: React.FC<FileInputProps> = ({}) => {
	return <input type='file' />;
};

export default FileInput;
