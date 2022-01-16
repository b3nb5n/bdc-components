import React from 'react';
import { createUseStyles } from 'react-jss';
import { InputProps, InputStructureGlobals } from '../..';
import { theming, useTheme } from '../../../../theme';
import InputBase from '../input-base';

export interface TextInputStructure extends InputStructureGlobals<'text'> {
	multiline?: boolean;
}

export type TextInputProps = Omit<InputProps<TextInputStructure>, 'type'>;

const useStyles = createUseStyles(
	(theme) => ({
		textInput: {
			boxSizing: 'border-box',
			border: `1px solid ${theme.color.inactive.toString()}`,
			borderRadius: theme.shape.borderRadius,
			outline: 'none',
			padding: [8, 12],
			width: '36ch',
			minWidth: '24ch',
			maxWidth: 'min(56ch, 100%)',
			'&:hover': {
				borderColor: theme.color.primary.toString(),
				boxShadow: [0, 2, 4, 0, 'rgba(0, 0, 0, 20%)'],
			},
			'&:focus': {
				padding: [7, 11],
				border: `2px solid ${theme.color.primary}`,
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
						borderColor: error ? theme.color.error.toString() : undefined,
					}}
					onChange={(e) => onChange && onChange(e.target.value)}
				/>
			)}
		</InputBase>
	);
};

export default TextInput;
