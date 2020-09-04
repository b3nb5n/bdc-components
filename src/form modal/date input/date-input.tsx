import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';

export interface DateInputStructure {
	type: 'date';
	name: string;
	label?: string;
	helpText?: string;
	required?: boolean;
}

interface DateInputProps {
	fieldStructure: DateInputStructure;
	value: Date | null;
	handleChange: (name: string, value: Date | null) => void;
}

export const DateInput: React.FC<DateInputProps> = ({ fieldStructure, value, handleChange }) => (
	<MuiPickersUtilsProvider utils={DateFnsUtils}>
		<KeyboardDatePicker
			name={fieldStructure.name}
			label={fieldStructure.label || fieldStructure.name}
			value={value}
			helperText={fieldStructure.helpText}
			required={!!fieldStructure.required}
			variant="inline"
			margin="normal"
			inputVariant="outlined"
			size="small"
			format="MM/dd/yyyy"
			disableToolbar
			onChange={(date: Date | null) => handleChange(fieldStructure.name, date)}
			KeyboardButtonProps={{
				'aria-label': 'change date'
			}}
		/>
	</MuiPickersUtilsProvider>
);
