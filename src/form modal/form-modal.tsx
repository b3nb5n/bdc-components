import { IconButton, Typography } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import React, { useState } from 'react';
import { Button } from './button/button';
import { DateFieldStructure, DateInput } from './date input/date-input';
import { FileFieldStructure, FileInput } from './file input/file-input';
import { initialState } from './initial-state';
import { OptionFieldStructure, OptionInput } from './option input/option-input';
import { useStyles } from './styles';
import { TextFieldStructure, TextInput } from './text input/text-input';
import { validate as validateRequired } from './validate';

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

export type InitialValue <T extends FieldStructure = FieldStructure> =
	T extends TextFieldStructure ? string
	: T extends DateFieldStructure ? Date | null
	: T extends OptionFieldStructure & { multi: true } ? string[]
	: T extends OptionFieldStructure ? string | null
	: T extends FileFieldStructure ? string | File | null
	: string | string[] | Date | File | null

export type FormValues <T extends FieldStructures = FieldStructures> = {
	[k in keyof T]: FieldValue<T[k]>
}

export type InitialValues <T extends FieldStructures> = {
	[k in keyof T]?: InitialValue<T[k]>
}

export type FormErrors <T extends FieldStructures = FieldStructures> = {
	valid: boolean
	errors: { [k in keyof T]?: string }
}

export type Action <T extends FieldStructures = FieldStructures> = {
	label: React.ReactNode
	validate?: boolean
	action: (values: FormValues<T>) => void
}

interface FormModalProps <T extends FieldStructures> {
	title: string;
	fieldStructures: T;
	fieldOrder?: string[]
	initialValues?: InitialValues<T>;
	validate?: (values: FormValues<T>) => FormErrors<T>
	onChange?: (fieldName: keyof T, value: FieldValue) => void
	onClose: () => void;
	actions: Action<T>[]
}

export const FormModal = <T extends FieldStructures> ({
	title,
	fieldStructures,
	fieldOrder,
	initialValues,
	validate,
	onChange,
	onClose,
	actions
}: FormModalProps<T>) => {
	const classes = useStyles()

	const [ values, setValues ] = useState<any>(initialState(fieldStructures, initialValues));
	const [ errors, setErrors ] = useState<{ [key: string]: string }>({});

	const handleChange = (name: string, value: FieldValue) => {
		const newValues = { ...values };
		newValues[name] = value;
		setValues(newValues);
		if (onChange) onChange(name, value)
	};

	const getValidation = () => {
		const requiredValidation = validateRequired(fieldStructures, values)
		const customValidation = validate ? validate(values) : { valid: true, errors: {} }

		const errors = { ...customValidation.errors, ...requiredValidation.errors }
		const valid = requiredValidation.valid && customValidation.valid

		return { valid, errors }
	}

	const handleAction = async (action: Action) => {
		if (action.validate) {
			const validation = getValidation()
			
			setErrors(validation.errors)
			if (validation.valid) action.action(values)
		} else {
			action.action(values)
		}
	}

	const fields = fieldOrder || Object.keys(fieldStructures)
	const inputs = fields.map(field => {
		const fieldStructure = fieldStructures[field]
		const inputProps = {
			name: field,
			value: values[field],
			error: errors[field],
			handleChange,
			key: `${field}-input`
		}

		return fieldStructure.type === 'text' ? (
			<TextInput {...inputProps} fieldStructure={fieldStructure} />
		) : fieldStructure.type === 'date' ? (
			<DateInput {...inputProps} fieldStructure={fieldStructure} />
		) : fieldStructure.type === 'option' ? (
			<OptionInput {...inputProps} fieldStructure={fieldStructure} />
		) : fieldStructure.type === 'file' ? (
			<FileInput {...inputProps} fieldStructure={fieldStructure} />
		) : null;
	});

	const actionButtons = actions.map(action => (
		<Button action={() => handleAction(action)}>
			{action.label}
		</Button>
	))

	return (
		<section className={classes.scrimming}>
			<div className={classes.card}>
				<div className={classes.card_head}>
					<IconButton
						aria-label="close"
						onClick={onClose}
						className={classes.close_button}
					>
						<CloseIcon />
					</IconButton>
					<Typography variant="h2">{title}</Typography>
				</div>

				<div className={classes.card_content}>
					<form className={classes.form}>
						{inputs}
					</form>
				</div>

				<div className={classes.card_actions}>
					{actionButtons}
				</div>
			</div>
		</section>
	)
};
