import { Field, Formik } from 'formik';
import React from 'react';
import { TextInput, TextInputProps } from '../text input/text-input';

export type FieldStructure =
	| TextInputProps
	| DateInputProps
	| OptionInputProps
	| ReferenceInputProps
	| AttachmentInputProps;

interface FormProps {
	name: string;
	fieldStructures: FieldStructure[];
	initialValues: { [key: string]: string };
	onSubmit: (data: { [key: string]: string }) => void;
	onClose: () => void;
}

export const Form: React.FC<FormProps> = ({ name, fieldStructures, initialValues, onSubmit, onClose }) => {
	const inputs = fieldStructures.map(fieldStructure => {
		return fieldStructure.type === 'text' ? (
			<Field name={fieldStructure.name} as={TextInput(fieldStructure)} />
		) : null;
	});

	return (
		<section className="scrimming">
			<div className="card">
				<div className="card-head">
					<button className="card-close" onClick={onClose} />
					<h2>{name}</h2>
				</div>

				<div className="card-content">
					<Formik initialValues={initialValues} onSubmit={onSubmit}>
						{({ handleSubmit }) => <form onSubmit={handleSubmit}>{inputs}</form>}
					</Formik>
				</div>

				<div className="card-actions" />
			</div>
		</section>
	);
};
