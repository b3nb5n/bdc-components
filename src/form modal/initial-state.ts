import { FieldStructure, FormValues } from './form-modal';

export const initialState = (fieldStructures: FieldStructure[], initialValues?: FormValues) => {
	const defaultValue = (field: FieldStructure) => {
		return field.type === 'text'
			? ''
			: field.type === 'option' && !field.multi
				? null
				: field.type === 'option' && field.multi ? [] : field.type === 'date' ? null : null;
	};

	const initialState = {};
	fieldStructures.forEach(field => {
		const initialValue = initialValues ? initialValues[field.name] : undefined;
		initialState[field.name] = initialValue || defaultValue(field);
	});

	return initialState;
};
