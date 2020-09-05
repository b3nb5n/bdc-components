import { FormValues, FieldStructure } from './form-modal';

export const validate = (fieldStructures: FieldStructure[], values: FormValues) => {
	const errors: { [key: string]: string } = {};
	const requiredFields = fieldStructures.filter(field => field.required);

	requiredFields.forEach(field => {
		if (!values[field.name]) errors[field.name] = 'This field is required.';
	});

	return {
		valid: !Object.keys(errors).length,
		errors: errors
	};
};
