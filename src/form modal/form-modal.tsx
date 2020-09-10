import React, { useState, ReactElement } from 'react';
import { Button } from '../button/button';
import { CloseButton } from './close button/close-button';
import classes from './form-modal.module.css'
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

export type FieldStructures = {
	[key: string]: FieldStructure
}

export type FieldValue <T extends FieldStructure = FieldStructure> =
	T extends TextFieldStructure ? string
	: T extends DateFieldStructure & { required: true } ? Date
	: T extends DateFieldStructure ? Date | null
	: T extends OptionFieldStructure & { multi: true } ? string[]
	: T extends OptionFieldStructure & { required: true } ? string
	: T extends OptionFieldStructure ? string | null
	: T extends FileFieldStructure & { required: true } ? string | File
	: T extends FileFieldStructure ? string | File | null
	: string | string[] | Date | File | null

export type FormValues <T extends FieldStructures = FieldStructures> = {
	[k in keyof T]: FieldValue<T[k]>
}

export type InitialValues <T extends FieldStructures> = {
	[k in keyof T]?: FieldValue<T[k]>
}

export interface Action <T extends FormValues> {
	name: string
	label: string | ReactElement
	validate?: boolean
	action: (values: T) => void | Promise<void>
}

interface FormModalProps <T extends FieldStructures> {
	name: string;
	fieldStructures: T;
	initialValues?: InitialValues<T>;
	actions: Action<FormValues<T>>[]
	handleClose: () => void;
}

export const FormModal = <T extends FieldStructures> (props: FormModalProps<T>) => {
	const { name, fieldStructures, initialValues, actions, handleClose } = props

	const fields = Object.keys(fieldStructures)
	const [ values, setValues ] = useState<any>(initialState(fieldStructures, initialValues));
	const [ errors, setErrors ] = useState<{ [key: string]: string }>({});

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

	const actionButtons = actions.map(action => {
		const handleClick = () => {
			if (action.validate) {
				const validation = validate(fieldStructures, values);

				setErrors(validation.errors);
				if (validation.valid) action.action(values);
			} else {
				action.action(values)
			}
		}

		return (
			<Button action={handleClick} key={action.name} aria-label={action.name}>
				{action.label}
			</Button>
		)
	})

	return (
		<section className={classes.scrimming}>
			<div className={classes.card}>
				<div className={classes.card_head}>
					<CloseButton handleClose={handleClose} />
					<h2>{name}</h2>
				</div>

				<form className={classes.form}>
					<div className={classes.card_content}>{inputs}</div>
				</form>

				<div className={classes.card_actions}>
					{actionButtons}
				</div>
			</div>
		</section>
	);
};
