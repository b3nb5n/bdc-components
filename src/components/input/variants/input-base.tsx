import React from 'react';
import { InputProps } from '..';
import { useTheme } from '../../../theme';
import Text from '../../text';

// export const useGlobalInputStyles = createUseStyles<'inputBox', InputProps>(
// 	(theme) => {
// 		return {
// 			inputBox: {
// 				boxSizing: 'border-box',
// 				minWidth: '100%',
// 				padding: [8, 12],
// 				border: 'none',
// 				borderRadius: theme.shape.borderRadius,
// 				outlineWidth: 1,
// 				outlineStyle: 'solid',
// 				outlineColor: ({ error }) =>
// 					error ? theme.color.error.toString() : theme.color.inactive.toString(),
// 				outlineOffset: -1,
// 				caretColor: ({ error }) =>
// 					error ? theme.color.error.toString() : theme.color.primary.toString(),
// 				transition: [
// 					['box-shadow', '120ms', 'ease'],
// 					['outline-color', '120ms', 'ease'],
// 				],
// 				'&:hover': {
// 					outlineColor: ({ error }) =>
// 						error ? theme.color.error.toString() : theme.color.primary.toString(),
// 					boxShadow: [0, 2, 4, 0, 'rgba(0, 0, 0, 20%)'],
// 				},
// 				'&:focus-within': {
// 					outlineWidth: 2,
// 					outlineColor: ({ error }) =>
// 						error ? theme.color.error.toString() : theme.color.primary.toString(),
// 					outlineOffset: -2,
// 					boxShadow: [0, 2, 4, 0, 'rgba(0, 0, 0, 20%)'],
// 				},
// 			},
// 		};
// 	},
// 	{ theming }
// );

type InputBaseProps = InputProps & { id: string };

const InputBase: React.FC<InputBaseProps> = ({
	label,
	id,
	errorMessage,
	fullWidth,
	children,
}) => {
	const theme = useTheme();
	const color = errorMessage ? theme.color.error.toString() : undefined;
	const labelOffset = theme.shape.borderRadius + 4;

	return (
		<div
			style={{
				boxSizing: 'border-box',
				width: fullWidth ? '100%' : '36ch',
				minWidth: '16ch',
				maxWidth: fullWidth ? '100%' : 'min(56ch, 100%)',
				marginBottom: theme.shape.density * 8,
			}}
		>
			<Text variant='label' style={{ color, marginLeft: labelOffset }}>
				<label htmlFor={id}>{label}</label>
			</Text>

			{children}

			{errorMessage && (
				<Text
					variant='label'
					style={{
						color,
						fontSize: 10,
						marginTop: 1,
						marginLeft: labelOffset,
					}}
				>
					{errorMessage}
				</Text>
			)}
		</div>
	);
};

export default InputBase;
