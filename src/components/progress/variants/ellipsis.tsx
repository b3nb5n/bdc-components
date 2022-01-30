import React from 'react';
import { createUseStyles } from 'react-jss';
import { ProgressVariantProps } from '..';
import { useTheme } from '../../../theme';

const useStyles = createUseStyles({
	wrapper: { display: 'flex' },
	dot: {
		width: 8,
		aspectRatio: 1,
		margin: [0, 1.2],
		background: 'black',
		borderRadius: '50%',
		animationName: '$pulse',
		animationDuration: 1000,
		animationTimingFunction: 'linear',
		animationIterationCount: 'infinite',
	},
	'@keyframes pulse': {
		'0%': { transform: 'scale(1)' },
		'30%': { transform: 'scale(1)' },
		'50%': { transform: 'scale(1.2)' },
		'70%': { transform: 'scale(1)' },
		'100%': { transform: 'scale(1)' },
	},
});

const EllipsisProgress: React.FC<ProgressVariantProps> = ({ color }) => {
	const classes = useStyles();
	const theme = useTheme();
	const colorValue =
		color === 'primary' ? theme.color.primary : theme.color.primary.getContrastingForeground();

	Array(3).forEach((_, i) => console.log(i));

	return (
		<div className={classes.wrapper}>
			{Array(3)
				.fill(null)
				.map((_, i) => (
					<div
						key={i}
						className={classes.dot}
						style={{
							background: colorValue.toString(),
							animationDelay: `${i * 120}ms`,
						}}
					/>
				))}
		</div>
	);
};

export default EllipsisProgress;
