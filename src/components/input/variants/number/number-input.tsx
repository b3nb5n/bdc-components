import React from 'react';
import { GlobalInputProps } from '../..';
import { useId } from '../../../..';
import InputBase from '../input-base';

export interface NumberInputProps extends GlobalInputProps<'number'> {}

const NumberInput: React.FC<NumberInputProps> = (props) => {
	const id = useId();
	// const classes = useGlobalInputStyles(props);
	const { onChange } = props;

	return (
		<InputBase id={id} {...props}>
			<input
				type='number'
				id={id}
				// className={classes.inputBox}
				onChange={(e) => onChange && onChange(parseFloat(e.target.value))}
			/>
		</InputBase>
	);
};

export default NumberInput;
