import React from 'react';
import { InputProps } from '..';
import { useTheme } from '../../../theme';
import Text from '../../text';

const InputBase: React.FC<Omit<InputProps, 'type'>> = ({
	label,
	id,
	helpText,
	error,
	fullWidth,
	children,
}) => {
	const theme = useTheme();

	return (
		<div
			style={{
				boxSizing: 'border-box',
				width: fullWidth ? '100%' : '36ch',
				minWidth: '24ch',
				maxWidth: fullWidth ? '100%' : 'min(56ch, 100%)',
				marginBottom: theme.shape.density * (helpText ? 10 : 6),
				caretColor: error ? theme.color.error.toString() : undefined,
			}}
		>
			<Text
				variant='label'
				style={{
					marginLeft: theme.shape.borderRadius + 4,
					maxWidth: '100%',
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis',
					color: error ? theme.color.error.toString() : undefined,
				}}
			>
				<label htmlFor={id}> {label} </label>
			</Text>

			{children}

			{helpText && (
				<Text
					variant='label'
					style={{
						fontSize: 10,
						marginTop: 1,
						marginLeft: theme.shape.borderRadius + 4,
						color: error ? theme.color.error.toString() : undefined,
					}}
				>
					{helpText}
				</Text>
			)}
		</div>
	);
};

export default InputBase;
