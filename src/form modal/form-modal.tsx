import React, { useState } from 'react';
import styles from './form-modal.module.css';
import { ThemeProvider } from '../theme';
import { Button } from '@material-ui/core';
import { CloseButton } from './close button/close-button';
import { TextInput, TextInputStructure } from './text input/text-input';
import { OptionInput, OptionInputStructure } from './option input/option-input';
import { DateInput, DateInputStructure } from './date input/date-input';
import { FileInput, FileInputStructure } from './file input/file-input';
import { initialState } from './initial-state';
import { validate } from './validate';

export type FieldValue = string | string[] | Date | File | null;
export type FormValues = { [key: string]: FieldValue };
export type FieldStructure = TextInputStructure | DateInputStructure | OptionInputStructure | FileInputStructure;

interface FormModalProps {
	name: string;
	fieldStructures: FieldStructure[];
	initialValues?: FormValues;
	handleSubmit: (values: FormValues) => void | Promise<void>;
	handleClose: () => void;
}

export const FormModal: React.FC<FormModalProps> = ({
	name,
	fieldStructures,
	initialValues,
	handleSubmit,
	handleClose
}) => {
	const [ values, setValues ] = useState<any>(initialState(fieldStructures, initialValues));
	const [ errors, setErrors ] = useState<{ [key: string]: string }>({});

	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const validation = validate(fieldStructures, values);

		setErrors(validation.errors);
		if (validation.valid) handleSubmit(values);
	};

	const handleChange = (name: string, value: FieldValue) => {
		const newValues = { ...values };
		newValues[name] = value;
		setValues(newValues);
	};

	const inputs = fieldStructures.map(fieldStructure => {
		return fieldStructure.type === 'text' ? (
			<TextInput
				fieldStructure={fieldStructure}
				value={values[fieldStructure.name]}
				error={errors[fieldStructure.name]}
				handleChange={handleChange}
				key={fieldStructure.name}
			/>
		) : fieldStructure.type === 'date' ? (
			<DateInput
				fieldStructure={fieldStructure}
				value={values[fieldStructure.name]}
				error={errors[fieldStructure.name]}
				handleChange={handleChange}
				key={fieldStructure.name}
			/>
		) : fieldStructure.type === 'option' ? (
			<OptionInput
				fieldStructure={fieldStructure}
				value={values[fieldStructure.name]}
				error={errors[fieldStructure.name]}
				handleChange={handleChange}
				key={fieldStructure.name}
			/>
		) : fieldStructure.type === 'file' ? (
			<FileInput
				fieldStructure={fieldStructure}
				value={values[fieldStructure.name]}
				error={errors[fieldStructure.name]}
				handleChange={handleChange}
				key={fieldStructure.name}
			/>
		) : null;
	});

	return (
		<section className={styles.scrimming}>
			<div className={styles.card}>
				<div className={styles.card_head}>
					<CloseButton handleClose={handleClose} />
					<h2>{name}</h2>
				</div>

				<form onSubmit={submit} className={styles.form}>
					<ThemeProvider>
						<div className={styles.card_content}>{inputs}</div>

						<div className={styles.card_actions}>
							<Button variant="contained" color="primary" type="submit">
								Save
							</Button>
						</div>
					</ThemeProvider>
				</form>
			</div>
		</section>
	);
};
