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
	const [values, setValues] = useState<Partial<FormValues<T>>>(initialValues ?? {});
	const [inputErrors, setInputErrors] = useState<InputErrors<T>>({});
	const [globalError, setGlobalError] = useState<string>();
	const theme = useTheme();

	// If a value is not provided it is retrieved from the form values
	const validateField = (inputId: keyof T, value?: InputValue) => {
		const { validate, required } = structure[inputId];
		value ??= values[inputId];

		if (required && !value) return 'required';
		// @ts-ignore
		if (validate) return validate(value);
		return undefined;
	};

	const inputs = Object.entries(structure).map((inputEntry) => {
		const [inputId, inputProps] = inputEntry;
		const { label } = inputProps;
		const fieldName = label ?? inputId;
		const errorMessage = inputErrors[inputId];

		const handleChange = (value: InputValue) => {
			const { onChange } = inputProps;
			// @ts-ignore
			if (onChange) onChange(value);
			// if a field already has an error validate it individually
			if (errorMessage) {
				setInputErrors({ ...inputErrors, [inputId]: validateField(inputId, value) });
			}

			setValues({ ...values, [inputId]: value });
		};

		return (
			<Input
				{...inputProps}
				key={inputId}
				label={fieldName}
				errorMessage={errorMessage}
				onChange={handleChange}
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
		<form style={{ width: 'min-content' }} onSubmit={(e) => e.preventDefault()}>
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
