import React from 'react';
import CircularProgress from './variants/circular';

export interface ProgressProps {
	type: 'linear' | 'circular';
	color?: 'primary' | 'onPrimary';
}

export type ProgressVariantProps = Required<Omit<ProgressProps, 'type'>>;

const Progress: React.FC<ProgressProps> = (props) => {
	const variantProps: ProgressVariantProps = {
		color: props.color ?? 'primary',
	};

	switch (props.type) {
		case 'circular':
			return <CircularProgress {...variantProps} />;
		case 'linear':
			throw Error('unimplemented');
		default:
			throw TypeError('invalid progress type');
	}
};

export default Progress;
