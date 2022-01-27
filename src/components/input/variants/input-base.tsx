import React from 'react';
import { InputProps } from '..';
import Text from '../../text';

type InputBaseProps = Omit<InputProps, 'type'> & { id: string };

const InputBase: React.FC<InputBaseProps> = ({
	label,
	id,
	errorMessage,
	fullWidth,
	children,
}) => {
	const color = errorMessage ? 'red' : undefined;
	const labelOffset = 8;

	return (
		<div
			style={{
				boxSizing: 'border-box',
				width: fullWidth ? '100%' : '36ch',
				minWidth: '16ch',
				maxWidth: fullWidth ? '100%' : 'min(56ch, 100%)',
				height: 'min-content',
			}}
		>
			{label && (
				<Text variant='label' style={{ color, marginLeft: labelOffset }}>
					<label htmlFor={id}>{label}</label>
				</Text>
			)}

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
