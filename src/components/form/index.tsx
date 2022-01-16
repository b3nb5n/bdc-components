import React, { useState } from 'react';
import Button from '../button';
import Input, { InitialValue, InputStructure, InputValue } from '../input';
import Text from '../text';

export type FormStructure = {
	[key: string]: InputStructure;
};

export type FormValues<T extends FormStructure = FormStructure> = {
	[k in keyof T]: InputValue<T[k]>;
};

type InitialFormValues<T extends FormStructure = FormStructure> = {
	[k in keyof T]?: InitialValue<T[k]>;
};

type InputErrors<T extends FormStructure = FormStructure> = {
	[k in keyof T]?: string;
};

export interface FormProps<T extends FormStructure = FormStructure> {
	structure: T;
	initialValues?: InitialFormValues<T>;
	validate?: (values: Partial<FormValues<T>>) => string | void | undefined;
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

	const [inputErrors, setInputErrors] = useState<InputErrors<T>>({});
	const [globalError, setGlobalError] = useState<string>();

	const inputs = Object.keys(structure).map((inputId) => {
		const inputStructure = structure[inputId];
		const errorMessage = inputErrors[inputId];
		const { label, required, validate, onChange } = inputStructure;
		const fieldName = label ?? inputId;

		const handleChange = (value: InputValue) => {
			setValue(inputId, value as InputValue<T[typeof inputId]>);
			// @ts-ignore
			if (onChange) onChange(value);
			// only individually validate if there is already an error on the field
			if (errorMessage) {
				// TODO: extract field validation
			}
		};

		return (
			<Input
				{...inputStructure}
				label={fieldName}
				helpText={errorMessage}
				error={!!errorMessage}
				onChange={handleChange}
				key={inputId}
			/>
		);
	});

	const handleSubmit = async () => {
		const newGlobalError = validate ? validate(values) : undefined;
		const newInputErrors = Object.keys(structure).reduce<InputErrors>((errors, inputId) => {
			const { validate, required } = structure[inputId];
			const value = values[inputId];
			// @ts-ignore
			if (validate) errors[inputId] = validate(value);
			if (required && !value) errors[inputId] = 'required';
			return errors;
		}, {});

		setGlobalError(newGlobalError ?? undefined);
		setInputErrors(newInputErrors);

		const hasInputErrors = Object.values(newInputErrors).reduce((a, b) => a || !!b, false);
		if (newGlobalError || hasInputErrors) return;
		if (onSubmit) await onSubmit(values as FormValues<T>);
	};

	return (
		<form style={{ width: 'fit-content' }} onSubmit={(e) => e.preventDefault()}>
			{inputs}
			<Button label='Submit' onClick={handleSubmit} manageLoading fullWidth />
			{globalError && <Text variant='body'>{globalError}</Text>}
		</form>
	);
};

export default Form;
