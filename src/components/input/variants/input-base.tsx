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
				width: fullWidth ? '100%' : 'fit-content',
				marginBottom: theme.shape.density * 6,
			}}
		>
			<Text
				variant='label'
				style={{
					marginLeft: theme.shape.borderRadius,
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
						marginLeft: theme.shape.borderRadius * 2,
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
