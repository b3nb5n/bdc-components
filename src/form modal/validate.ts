import { FieldStructures, FormValues } from './form-modal';

type Errors = {
	[key: string]: string;
};

export const validate = (fieldStructures: FieldStructures, values: FormValues) => {
	const fields = Object.keys(fieldStructures);

	const errors = fields.reduce((errors: Errors, field) => {
		const fieldStructure = fieldStructures[field];
		const value = values[field];

		if (fieldStructure.required && value === []) console.log(1, field);
		if (fieldStructure.required) console.log(2, field);
		if (value === []) console.log(3, field);

		if ((fieldStructure.required && !value) || (fieldStructure.required && value === [])) {
			errors[field] = 'This field is required';
		}

		return errors;
	}, {});

	return { valid: !Object.keys(errors).length, errors };
};
