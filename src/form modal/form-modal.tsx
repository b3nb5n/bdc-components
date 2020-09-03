import DateFnsUtils from '@date-io/date-fns';
import { Button, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import React, { useState } from 'react';
import styles from './form.module.css';

interface TextInputStructure {
	type: 'text';
	name: string;
	label?: string;
	helpText?: string;
	required?: boolean;
	multiline?: boolean;
}

interface DateInputStructure {
	type: 'date';
	name: string;
	label?: string;
	helpText?: string;
	required?: boolean;
}

interface OptionInputStructure {
	type: 'option';
	name: string;
	label?: string;
	helpText?: string;
	required?: boolean;
	options: string[];
	multi?: boolean;
}

interface AttachmentInputStructure {
	type: 'attachment';
	name: string;
	label?: string;
	helpText?: string;
	required?: boolean;
	multi?: boolean;
	acceptedTypes?: string[];
}

export type FieldStructure = TextInputStructure | DateInputStructure | OptionInputStructure | AttachmentInputStructure;

interface FormModalState {
	[key: string]: string | string[] | Date | null;
}

interface FormModalProps {
	name: string;
	fieldStructures: FieldStructure[];
	initialValues: FormModalState;
	onSubmit: (values: FormModalState) => void;
	onClose: () => void;
}

export const FormModal: React.FC<FormModalProps> = ({ name, fieldStructures, initialValues, onSubmit }) => {
	const [ values, setValues ] = useState<FormModalState>(initialValues);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(values);
	};

	const handleChange = (name: string, value: string | string[] | Date | null) => {
		const newValues = { ...values };
		newValues[name] = value;
		setValues(newValues);
	};

	const fields = fieldStructures.map(fieldStructure => {
		return fieldStructure.type === 'text' ? (
			<TextField
				name={fieldStructure.name}
				key={fieldStructure.name}
				label={fieldStructure.label || fieldStructure.name}
				helperText={fieldStructure.helpText}
				multiline={!!fieldStructure.multiline}
				required={!!fieldStructure.required}
				onChange={event => handleChange(fieldStructure.name, event.target.value)}
				size="small"
				variant="outlined"
			/>
		) : fieldStructure.type === 'date' ? (
			<MuiPickersUtilsProvider utils={DateFnsUtils} key={fieldStructure.name}>
				<KeyboardDatePicker
					name={fieldStructure.name}
					label={fieldStructure.label || fieldStructure.name}
					value={values[fieldStructure.name]}
					helperText={fieldStructure.helpText}
					required={!!fieldStructure.required}
					variant="inline"
					inputVariant="outlined"
					size="small"
					format="MM/dd/yyyy"
					disableToolbar
					onChange={(date: Date | null) => handleChange(fieldStructure.name, date)}
					KeyboardButtonProps={{
						'aria-label': 'change date'
					}}
				/>
			</MuiPickersUtilsProvider>
		) : fieldStructure.type === 'option' ? (
			<Autocomplete
				key={fieldStructure.name}
				multiple={!!fieldStructure.multi}
				options={fieldStructure.options}
				getOptionLabel={(option: string) => option}
				onChange={(_event, value) => handleChange(fieldStructure.name, value)}
				blurOnSelect={!fieldStructure.multi}
				size="small"
				filterSelectedOptions
				clearOnBlur
				renderInput={params => (
					<TextField
						{...params}
						variant="outlined"
						size="small"
						label={fieldStructure.label || fieldStructure.name}
						helperText={fieldStructure.helpText}
					/>
				)}
			/>
		) : null;
	});

	return (
		<section className={styles.scrimming}>
			<div className={styles.card}>
				<div className={styles.card_head}>
					<h2>{name}</h2>
				</div>

				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.card_content}>{fields}</div>

					<div className={styles.card_actions}>
						<Button variant="contained" color="primary" type="submit">
							Save
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
};
