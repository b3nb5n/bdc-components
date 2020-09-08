import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { CloseButton } from './close button/close-button';
import { ThemeProvider } from '../theme';
import { formModalStyles } from './styles';
import { global, styles } from '../styles';
import { TextInput, TextFieldStructure } from './text input/text-input';
import { OptionInput, OptionFieldStructure } from './option input/option-input';
import { DateInput, DateFieldStructure } from './date input/date-input';
import { FileInput, FileFieldStructure } from './file input/file-input';
import { initialState } from './initial-state';
import { validate } from './validate';

export interface Field {
	type: 'text' | 'option' | 'date' | 'file';
	label?: string;
	helpText?: string;
	required?: boolean;
}

export type FieldStructure =
	TextFieldStructure
	| OptionFieldStructure
	| DateFieldStructure
	| FileFieldStructure

export type FieldValue <T extends FieldStructure = FieldStructure> =
	T extends TextFieldStructure ? string
	: T extends DateFieldStructure ? Date | null
	: T extends OptionFieldStructure ? string | string[] | null
	: T extends FileFieldStructure ? string | File | null
	: string | string[] | Date | File | null

export type FormConfig = { [key: string]: FieldStructure }

export type FormValues <T extends FormConfig> = {
	[k in keyof T]: FieldValue<T[k]>
}

interface FormModalProps <T extends FormConfig> {
	name: string;
	fieldStructures: T;
	initialValues?: FormValues<T>;
	handleSubmit: (values: FormValues<T>) => void | Promise<void>;
	handleClose: () => void;
}

export const FormModal = <T extends FormConfig, > ({
	name,
	fieldStructures,
	initialValues,
	handleSubmit,
	handleClose
}: FormModalProps<T>) => {
	const fields = Object.keys(fieldStructures)
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

	const inputs = fields.map(field => {
		const fieldStructure = fieldStructures[field]

		return fieldStructure.type === 'text' ? (
			<TextInput
				fieldStructure={fieldStructure}
				name={field}
				value={values[field]}
				error={errors[field]}
				handleChange={handleChange}
				key={field}
			/>
		) : fieldStructure.type === 'date' ? (
			<DateInput
				fieldStructure={fieldStructure}
				name={field}
				value={values[field]}
				error={errors[field]}
				handleChange={handleChange}
				key={field}
			/>
		) : fieldStructure.type === 'option' ? (
			<OptionInput
				fieldStructure={fieldStructure}
				name={field}
				value={values[field]}
				error={errors[field]}
				handleChange={handleChange}
				key={field}
			/>
		) : fieldStructure.type === 'file' ? (
			<FileInput
				fieldStructure={fieldStructure}
				name={field}
				value={values[field]}
				error={errors[field]}
				handleChange={handleChange}
				key={field}
			/>
		) : null;
	});

	return (
		<section style={{ ...global, ...formModalStyles.scrimming }}>
			<div style={{ ...global, ...formModalStyles.card }}>
				<div style={{ ...global, ...formModalStyles.card_head }}>
					<CloseButton handleClose={handleClose} />
					<h2 style={{ ...global, ...styles.h2 }}>{name}</h2>
				</div>

				<form onSubmit={submit} style={{ ...global, ...formModalStyles.form }}>
					<ThemeProvider>
						<div style={{ ...global, ...formModalStyles.card_content }}>{inputs}</div>

						<div style={{ ...global, ...formModalStyles.card_actions }}>
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
