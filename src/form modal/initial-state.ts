import { FieldStructures, InitialValues, FieldStructure, FieldValue } from './form-modal';

export const initialState = <T extends FieldStructures>(fieldStructures: T, initialValues?: InitialValues<T>) => {
	const initialState: { [key: string]: FieldValue } = {};
	const fields = Object.keys(fieldStructures);

	const defaultValueOf = (field: FieldStructure): FieldValue => {
		if (field.type === 'text') return '';
		if (field.type === 'option' && !field.multi) return '';
		if (field.type === 'option' && field.multi) return [];
		if (field.type === 'date') return null;
		if (field.type === 'file') return null;
		return null;
	};

	fields.forEach(field => {
		const fieldStructure = fieldStructures[field];
		const initialValue = initialValues ? initialValues[field] : undefined;
		const defaultValue = defaultValueOf(fieldStructure);

		initialState[field] = initialValue || defaultValue;
	});

	return initialState;
};
