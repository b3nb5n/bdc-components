import React from 'react';
import { createUseStyles } from 'react-jss';
import { ProgressVariantProps } from '..';

const useStyles = createUseStyles({
	circularProgress: {
		boxSizing: 'border-box',
		height: 24,
		maxHeight: '100%',
		aspectRatio: 1,
		border: [3, 'solid', 'transparent'],
		borderRadius: '50%',
		animationName: '$spin',
		animationDuration: 1600,
		animationTimingFunction: 'linear',
		animationIterationCount: 'infinite',
	},
	'@keyframes spin': {
		from: { transform: 'rotate(0deg)' },
		to: { transform: 'rotate(360deg)' },
	},
});

const CircularProgress: React.FC<ProgressVariantProps> = ({ color }) => {
	// const theme = useTheme();
	const styles = useStyles();
	const colorValue = color === 'primary' ? 'black' : 'white';

	return <div className={styles.circularProgress} style={{ borderTopColor: colorValue }} />;
};

export default CircularProgress;
