import React from 'react';
import { useTheme } from '../../../theme';

export interface InputBaseProps {
	name: string;
	inputId: string;
	fullWidth?: boolean;
}

const InputBase: React.FC<InputBaseProps> = ({ name, inputId, fullWidth, children }) => {
	const theme = useTheme();

	return (
		<div style={{ boxSizing: 'border-box', width: fullWidth ? '100%' : 'fit-content' }}>
			<label
				htmlFor={inputId}
				style={{
					display: 'block',
					marginLeft: theme.shape.borderRadius,
					maxWidth: '100%',
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis',
					...theme.typography.label,
				}}
			>
				{name}
			</label>
			{children}
		</div>
	);
};

export default InputBase;
