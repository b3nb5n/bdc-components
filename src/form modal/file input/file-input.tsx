interface FileInputStructure {
	type: 'file';
	name: string;
	label?: string;
	helpText?: string;
	required?: boolean;
	multi?: boolean;
	acceptedTypes?: string[];
}
