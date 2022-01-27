import React from 'react';
import { createUseStyles } from 'react-jss';
import { theming } from '../../../../theme';
import useId from '../../../../utils/use-id';
import InputBase from '../input-base';

type TextInputValue = string;

export interface TextInputStructure {
	type: 'text';
	label?: string | undefined;
	icon?: React.ReactNode;
	fullWidth?: boolean | undefined;
	initialValue?: NonNullable<TextInputValue>;
	errorMessage?: string | undefined;
	required?: boolean | undefined;
	validateOn?: 'change' | 'blur' | 'none' | undefined;
	validate?: (value: TextInputValue) => string | undefined;
	onChange?: (value: TextInputValue) => any;
}

export type TextInputProps = Omit<TextInputStructure, 'type'>;

export const useStyles = createUseStyles<'inputBox' | 'textInput', TextInputProps>(
	(theme) => ({
		inputBox: {
			boxSizing: 'border-box',
			minWidth: '100%',
			border: 'none',
			borderRadius: 8,
			outlineWidth: 1,
			outlineStyle: 'solid',
			outlineColor: ({ errorMessage }) => (errorMessage ? 'red' : '#ccc'),
			outlineOffset: -1,
			display: 'grid',
			gridTemplateColumns: 'min-content auto',
			transition: [
				['box-shadow', '120ms', 'ease'],
				['outline-color', '120ms', 'ease'],
			],
			'&:hover': {
				outlineColor: ({ errorMessage }) => (errorMessage ? 'red' : 'black'),
				boxShadow: [0, 2, 4, 0, 'rgba(0, 0, 0, 20%)'],
			},
			'&:focus-within': {
				outlineWidth: 2,
				outlineColor: ({ errorMessage }) => (errorMessage ? 'red' : 'black'),
				outlineOffset: -2,
				boxShadow: [0, 2, 4, 0, 'rgba(0, 0, 0, 20%)'],
			},
		},
		textInput: {
			outline: 'none',
			border: 'none',
			fontSize: 16,
			lineHeight: '1em',
			padding: ['0.5em', '1em'],
			background: 'transparent',
			caretColor: ({ errorMessage }) => (errorMessage ? 'red' : 'black'),
		},
	}),
	{ theming }
);

const TextInput: React.FC<TextInputProps> = (props) => {
	const { onChange, initialValue, icon } = props;
	const id = useId();
	const classes = useStyles(props);

	return (
		<InputBase {...props} id={id}>
			<div className={classes.inputBox}>
				<div
					style={{
						height: '100%',
						aspectRatio: '1 / 1',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{icon}
				</div>
				<input
					type='text'
					id={id}
					className={classes.textInput}
					defaultValue={initialValue}
					onChange={(e) => onChange && onChange(e.target.value)}
				/>
			</div>
		</InputBase>
	);
};

export default TextInput;
