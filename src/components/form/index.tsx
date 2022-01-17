import React, { useState } from 'react';
import { useTheme } from '../../theme';
import Button from '../button';
import Input, { InputProps, InputValue } from '../input';
import Text from '../text';

export type FormStructure = {
	[key: string]: InputProps;
};

export type FormValues<T extends FormStructure = FormStructure> = {
	[k in keyof T]: InputValue<T[k]['type']>;
};

type InputErrors<T extends FormStructure = FormStructure> = {
	[k in keyof T]?: string;
};

export interface FormProps<T extends FormStructure = FormStructure> {
	structure: T;
	initialValues?: Partial<FormValues<T>>;
	validate?: (values: Partial<FormValues<T>>) => string | undefined;
	onSubmit?: (values: FormValues<T>) => any;
}

const Form = <T extends FormStructure>({
	structure,
	initialValues,
	validate,
	onSubmit,
}: FormProps<T>) => {
	const theme = useTheme();

	const [values, setValues] = useState<Partial<FormValues<T>>>(initialValues ?? {});
	const setValue = (inputId: keyof T, value: InputValue) =>
		setValues({ ...values, [inputId]: value });

	const [inputErrors, setInputErrors] = useState<InputErrors<T>>({});
	const [globalError, setGlobalError] = useState<string>();

	const validateField = (inputId: keyof T) => {
		const { validate, required } = structure[inputId];
		const value = values[inputId];

		if (required && !value) return 'required';
		// @ts-ignore
		if (validate) return validate(value);
		return undefined;
	};

	const inputs = Object.entries(structure).map((inputEntry) => {
		const [inputId, inputProps] = inputEntry;
		const errorMessage = inputErrors[inputId];
		const { label, onChange } = inputProps;
		const fieldName = label ?? inputId;

		const handleChange = (value: InputValue) => {
			setValue(inputId, value);
			// @ts-ignore
			if (onChange) onChange(value);
			if (errorMessage) {
				const newErrors = { ...inputErrors, [inputId]: validateField(inputId) };
				if (newErrors[inputId] !== errorMessage) setInputErrors(newErrors);
			}
		};

		return (
			<Input
				{...inputProps}
				key={inputId}
				label={fieldName}
				helpText={errorMessage}
				error={!!errorMessage}
				onChange={handleChange}
				fullWidth
			/>
		);
	});

	const handleSubmit = async () => {
		const newGlobalError = validate ? validate(values) : undefined;
		const newInputErrors = Object.keys(structure).reduce<InputErrors<T>>(
			(errors, inputId) => ({ ...errors, [inputId]: validateField(inputId) }),
			{}
		);

		setGlobalError(newGlobalError);
		setInputErrors(newInputErrors);

		const hasGlobalError = newGlobalError && newGlobalError.length > 0;
		const hasInputErrors = Object.values(newInputErrors).reduce((a, b) => a || !!b, false);
		if (hasGlobalError || hasInputErrors) return;
		if (onSubmit) await onSubmit(values as FormValues<T>);
	};

	return (
		<form style={{ width: '36ch' }} onSubmit={(e) => e.preventDefault()}>
			{inputs}
			<Button
				label='Submit'
				onClick={handleSubmit}
				style={{ marginBottom: 4 }}
				manageLoading
				fullWidth
			/>
			{globalError && (
				<Text
					variant='body'
					style={{
						color: theme.color.error.toString(),
						marginLeft: theme.shape.borderRadius + 4,
					}}
				>
					{globalError}
				</Text>
			)}
		</form>
	);
};

export default Form;
