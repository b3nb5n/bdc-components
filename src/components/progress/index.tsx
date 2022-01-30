import React from 'react';
import CircularProgress from './variants/circular';
import EllipsisProgress from './variants/ellipsis';

export interface ProgressProps {
	type: 'linear' | 'circular' | 'ellipsis';
	color?: 'primary' | 'onPrimary';
}

export type ProgressVariantProps = Required<Omit<ProgressProps, 'type'>>;

const Progress: React.FC<ProgressProps> = (props) => {
	const variantProps: ProgressVariantProps = {
		color: props.color ?? 'primary',
	};

	switch (props.type) {
		case 'linear':
			throw Error('unimplemented');
		case 'circular':
			return <CircularProgress {...variantProps} />;
		case 'ellipsis':
			return <EllipsisProgress {...variantProps} />;
		default:
			throw Error('invalid progress type');
	}
};

export default Progress;
