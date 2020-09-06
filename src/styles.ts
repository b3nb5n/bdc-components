import { CSSProperties } from 'react';

export const styles: { [key: string]: CSSProperties } = {
	h1: {
		fontWeight: 800,
		fontStyle: 'normal',
		fontSize: '60px',
		textTransform: 'capitalize',
		margin: 0
	},
	h2: {
		fontWeight: 800,
		fontStyle: 'normal',
		fontSize: '36px',
		textTransform: 'capitalize',
		margin: 0
	},
	h3: {
		fontWeight: 800,
		fontStyle: 'normal',
		fontSize: '24px',
		margin: 0
	}
};

export const global: CSSProperties = {
	boxSizing: 'border-box',
	fontFamily: 'din-2014, sans-serif',
	fontSize: '18px',
	color: 'inherit'
};

export const root = {
	black: '#000000',
	grey: '#333333',
	lightGrey: '#e5e5e5',
	surfaceOne: '#fafafa',
	surfaceTwo: '#ffffff',
	primary: '#496dc2'
};
