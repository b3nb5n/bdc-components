import React from 'react';
import { useTheme } from '../../theme';
import { TypographyTheme } from '../../theme/properties/typography';

export interface TextProps {
	variant: keyof Omit<TypographyTheme, 'fontFamily' | 'heading'>;
	style?: React.CSSProperties;
}

const Text: React.FC<TextProps> = ({ variant, children, style }) => {
	// useTheme().typography[variant];
	style = {
		...useTheme().typography[variant],
		boxSizing: 'border-box',
		verticalAlign: 'middle',
		display: 'block',
		margin: 0,
		...style,
	};

	switch (variant) {
		case 'body':
			return <div style={style}>{children}</div>;
		case 'h1':
			return <h1 style={style}>{children}</h1>;
		case 'h2':
			return <h2 style={style}>{children}</h2>;
		case 'h3':
			return <h3 style={style}>{children}</h3>;
		case 'h4':
			return <h4 style={style}>{children}</h4>;
		case 'label':
			return <span style={style}>{children}</span>;
		case 'button':
			return <span style={style}>{children}</span>;
		default:
			throw TypeError('invalid text variant');
	}
};

export default Text;
