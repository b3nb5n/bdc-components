import DateFnsUtils from '@date-io/date-fns';
import { Field } from '../form-modal';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';

export interface DateFieldStructure extends Field {
	type: 'date';
}

interface DateInputProps {
	fieldStructure: DateFieldStructure;
	name: string;
	value: Date | null;
	error?: string;
	handleChange: (name: string, value: Date | null) => void;
}

export const DateInput: React.FC<DateInputProps> = ({ fieldStructure, name, value, error, handleChange }) => (
	<MuiPickersUtilsProvider utils={DateFnsUtils}>
		<KeyboardDatePicker
			name={name}
			label={fieldStructure.label || name}
			value={value}
			helperText={error || fieldStructure.helpText}
			error={!!error}
			variant="inline"
			margin="normal"
			inputVariant="outlined"
			size="small"
			format="MM/dd/yyyy"
			disableToolbar
			onChange={(date: Date | null) => handleChange(name, date)}
			KeyboardButtonProps={{
				'aria-label': 'change date'
			}}
		/>
	</MuiPickersUtilsProvider>
);
