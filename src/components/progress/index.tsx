import { merge } from 'lodash';
import React from 'react';
import CircularProgress from './variants/circular';

export interface ProgressProps {
	type: 'linear' | 'circular';
	color?: 'primary' | 'onPrimary';
}

export type ProgressVariantProps = Required<Omit<ProgressProps, 'type'>>;

const defaultProgressVariantProps: ProgressVariantProps = {
	color: 'primary',
};

const Progress: React.FC<ProgressProps> = (props) => {
	const variantProps = merge({ ...defaultProgressVariantProps }, props);

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
