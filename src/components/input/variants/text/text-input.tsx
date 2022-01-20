import React from 'react';
import { GlobalInputProps } from '../..';
import useId from '../../../../utils/use-id';
import InputBase from '../input-base';

export interface TextInputProps extends GlobalInputProps<'text'> {
	type: 'text';
	multiline?: boolean;
}

const TextInput: React.FC<TextInputProps> = (props) => {
	const { multiline, onChange, initialValue } = props;
	const elProps = {
		id: useId(),
		initialValue,
		// className: useGlobalInputStyles(props).inputBox,
		onChange: (e: any) => onChange && onChange(e.target.value),
	};

	return (
		<InputBase {...props} id={elProps.id}>
			{multiline ? <textarea {...elProps} /> : <input type='text' {...elProps} />}
		</InputBase>
	);
};

export default TextInput;
