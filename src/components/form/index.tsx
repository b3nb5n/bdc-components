import React, { useState } from 'react';
import Button from '../button';
import Input, { InitialValue, InputStructure, InputValue } from '../input';

export type FormStructure = {
	[key: string]: InputStructure;
};

export type FormValues<T extends FormStructure = FormStructure> = {
	[k in keyof T]: InputValue<T[k]>;
};

type InitialFormValues<T extends FormStructure = FormStructure> = {
	[k in keyof T]?: InitialValue<T[k]>;
};

export interface FormProps<T extends FormStructure = FormStructure> {
	structure: T;
	initialValues?: InitialFormValues<T>;
	validate?: (values: Partial<FormValues<T>>) => string | undefined;
	onSubmit?: (values: FormValues<T>) => any;
}

const Form = <T extends FormStructure>({
	structure,
	initialValues,
	validate,
	onSubmit,
}: FormProps<T>) => {
	const [values, setValues] = useState<Partial<FormValues<T>>>(initialValues ?? {});
	const setValue = <K extends keyof T>(inputId: K, value: InputValue<T[K]>) => {
		const newValues = values;
		newValues[inputId] = value;
		setValues(newValues);
	};

	const inputs = Object.keys(structure).map((inputId) => {
		const inputStructure = structure[inputId];
		const label = inputStructure.label ?? inputId;

		const handleChange = (value: InputValue) => {
			setValue(inputId, value as InputValue<T[typeof inputId]>);
			const { onChange } = inputStructure;
			// @ts-ignore
			if (onChange) onChange(value);
		};

		return <Input {...inputStructure} label={label} onChange={handleChange} key={inputId} />;
	});

	const handleSubmit = () => {
		const globalError = validate ? validate(values) : undefined;
		const inputErrors: { [k in keyof T]?: string } = {};

		Object.keys(structure).forEach((inputId: keyof T) => {
			const { validate, required } = structure[inputId];
			const inputValue = values[inputId];

			if (required && !inputValue) inputErrors[inputId] = 'required';
			// @ts-ignore
			if (validate) inputErrors[inputId] = validate(inputValue);
		});

		if (globalError || Object.entries(inputErrors).length || !onSubmit) return;
		onSubmit(values as FormValues<T>);
	};

	return (
		<form style={{ width: 'fit-content' }} onSubmit={(e) => e.preventDefault()}>
			{inputs}
			<Button label='Submit' onClick={handleSubmit} fullWidth />
		</form>
	);
};

export default Form;
