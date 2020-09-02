import { Formik } from 'formik';
import React from 'react';
import { AttachmentInputProps, AttachmentmentInput } from '../attachment input/attachment-input';
import { DateInput, DateInputProps } from '../date input/date-input';
import { OptionInput, OptionInputProps } from '../option input/option-input';
import { ReferenceInput, ReferenceInputProps } from '../reference input/reference-input';
import { TextInput, TextInputProps } from '../text input/text-input';

export type FieldStructure =
	| TextInputProps
	| DateInputProps
	| OptionInputProps
	| ReferenceInputProps
	| AttachmentInputProps;

interface FormProps {
	fieldStructures: FieldStructure[];
	initialValues: { [key: string]: string };
	onSubmit: (data: { [key: string]: string }) => void;
}

export const Form: React.FC<FormProps> = ({ fieldStructures, initialValues, onSubmit }) => {
	const inputs = fieldStructures.map(fieldStructure => {
		return fieldStructure.type === 'text'
			? TextInput(fieldStructure)
			: fieldStructure.type === 'date'
				? DateInput(fieldStructure)
				: fieldStructure.type === 'option'
					? OptionInput(fieldStructure)
					: fieldStructure.type === 'reference'
						? ReferenceInput(fieldStructure)
						: fieldStructure.type === 'attachment' ? AttachmentmentInput(fieldStructure) : null;
	});

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			{({ values, errors, handleSubmit, isSubmitting }) => {}}
		</Formik>
	);
};
