import { FieldStructures, FormValues } from './form-modal';

export const validate = <T extends FieldStructures>(fieldStructures: T, values: FormValues<T>) => {
	const errors: { [key: string]: string } = {};

	const fields = Object.keys(fieldStructures);
	const requiredFields = fields.filter(field => fieldStructures[field].required);

	requiredFields.forEach(field => {
		if (!values[field]) errors[field] = 'This field is required.';
	});

	return {
		valid: !Object.keys(errors).length,
		errors: errors
	};
};
