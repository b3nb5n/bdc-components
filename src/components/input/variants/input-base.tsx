import React from 'react';
import { useTheme } from '../../../theme';
import Text from '../../text';

export interface InputBaseProps {
	label: string;
	inputId: string;
	fullWidth?: boolean;
}

const InputBase: React.FC<InputBaseProps> = ({ label, inputId, fullWidth, children }) => {
	const theme = useTheme();

	return (
		<div
			style={{
				boxSizing: 'border-box',
				width: fullWidth ? '100%' : 'fit-content',
				marginBottom: 8,
			}}
		>
			<Text variant='label'>
				<label
					htmlFor={inputId}
					style={{
						marginLeft: theme.shape.borderRadius,
						maxWidth: '100%',
						whiteSpace: 'nowrap',
						textOverflow: 'ellipsis',
						...theme.typography.label,
					}}
				>
					{label}
				</label>
			</Text>

			{children}
		</div>
	);
};

export default InputBase;
