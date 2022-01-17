import React from 'react';
import { createUseStyles } from 'react-jss';
import { GlobalInputProps } from '../..';
import { theming, useTheme } from '../../../../theme';
import InputBase from '../input-base';

export interface TextInputProps extends GlobalInputProps<'text'> {
	type: 'text';
	multiline?: boolean;
}

const useStyles = createUseStyles(
	(theme) => ({
		textInput: {
			boxSizing: 'border-box',
			width: '100%',
			padding: [8, 12],
			border: 'none',
			outlineOffset: -1,
			outline: `1px solid ${theme.color.inactive.toString()}`,
			borderRadius: theme.shape.borderRadius,
			transition: [
				['box-shadow', '120ms', 'ease'],
				['outline-color', '120ms', 'ease'],
			],
			'&:hover': {
				outlineColor: theme.color.primary.toString(),
				boxShadow: [0, 2, 4, 0, 'rgba(0, 0, 0, 20%)'],
			},
			'&:focus': {
				outlineOffset: -2,
				outline: `2px solid ${theme.color.primary}`,
				boxShadow: [0, 2, 4, 0, 'rgba(0, 0, 0, 20%)'],
			},
		},
		multiline: {
			minHeight: 72,
			maxWidth: '100%',
		},
	}),
	{ theming }
);

const TextInput: React.FC<TextInputProps> = (props) => {
	const { label, id, multiline, error, fullWidth, onChange } = props;
	const theme = useTheme();
	const classes = useStyles();
	const inputId = id ?? `${label}-input`;

	return (
		<InputBase {...props} id={inputId}>
			{multiline ? (
				<textarea
					id={inputId}
					className={`${classes.textInput} ${classes.multiline}`}
					style={{ minWidth: fullWidth ? '100%' : undefined }}
					onChange={(e) => onChange && onChange(e.target.value)}
				/>
			) : (
				<input
					id={inputId}
					type='text'
					className={classes.textInput}
					style={{
						minWidth: fullWidth ? '100%' : undefined,
						outlineColor: error ? theme.color.error.toString() : undefined,
					}}
					onChange={(e) => onChange && onChange(e.target.value)}
				/>
			)}
		</InputBase>
	);
};

export default TextInput;
