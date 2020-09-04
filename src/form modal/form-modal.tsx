import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { ThemeProvider } from '../theme';
import { CloseButton } from './close button/close-button';
import { DateInput, DateInputStructure } from './date input/date-input';
import styles from './form.module.css';
import { OptionInput, OptionInputStructure } from './option input/option-input';
import { TextInput, TextInputStructure } from './text input/text-input';

type FieldStructure = TextInputStructure | DateInputStructure | OptionInputStructure;
type FormModalState = { [key: string]: string | string[] | Date | null };

interface FormModalProps {
	name: string;
	fieldStructures: FieldStructure[];
	initialValues?: FormModalState;
	handleSubmit: (values: FormModalState) => void | Promise<void>;
	handleClose: () => void;
}

export const FormModal: React.FC<FormModalProps> = ({
	name,
	fieldStructures,
	initialValues,
	handleSubmit,
	handleClose
}) => {
	const defaultValue = (field: FieldStructure) => {
		return field.type === 'text'
			? ''
			: field.type === 'option' && !field.multi
				? null
				: field.type === 'option' && field.multi ? [] : field.type === 'date' ? null : null;
	};

	const initialState = {};
	fieldStructures.forEach(field => {
		const initialValue = initialValues ? initialValues[field.name] : undefined;
		initialState[field.name] = initialValue || defaultValue(field);
	});

	const [ values, setValues ] = useState<any>(initialState);

	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleSubmit(values);
	};

	const handleChange = (name: string, value: string | string[] | Date | null) => {
		const newValues = { ...values };
		newValues[name] = value;
		setValues(newValues);
	};

	const inputs = fieldStructures.map(fieldStructure => {
		return fieldStructure.type === 'text' ? (
			<TextInput
				fieldStructure={fieldStructure}
				value={values[fieldStructure.name]}
				handleChange={handleChange}
				key={fieldStructure.name}
			/>
		) : fieldStructure.type === 'date' ? (
			<DateInput
				fieldStructure={fieldStructure}
				value={values[fieldStructure.name]}
				handleChange={handleChange}
				key={fieldStructure.name}
			/>
		) : fieldStructure.type === 'option' ? (
			<OptionInput
				fieldStructure={fieldStructure}
				value={values[fieldStructure.name]}
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
