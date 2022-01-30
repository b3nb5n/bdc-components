import Css from '../../types/css';
import DeepPartial from '../../types/deep-partial';

interface TypographyRule {
	fontFamily: string | Css.GlobalValue;
	fontSize: Css.NumericValue<Css.Unit.Size> | Css.GlobalValue;
	fontWeight: 'light' | 'normal' | 'bold' | number | `${number}` | Css.GlobalValue;
	fontStyle:
		| 'normal'
		| 'italic'
		| `oblique ${Css.NumericValue<Css.Unit.Angle>}`
		| Css.GlobalValue;
	lineHeight: 'normal' | Css.NumericValue<Css.Unit.Size> | number | Css.GlobalValue;
	textTransform:
		| 'none'
		| 'capitalize'
		| 'uppercase'
		| 'lowercase'
		| 'full-width'
		| 'full-size-kana'
		| Css.GlobalValue;
}

const defaultTypographyRule: TypographyRule = {
	fontFamily: '"Helvetica", "Arial", sans-serif',
	fontSize: '1rem',
	fontWeight: 'normal',
	fontStyle: 'normal',
	lineHeight: 1,
	textTransform: 'none',
};

export interface TypographyTheme {
	fontFamily: string | Css.GlobalValue;
	heading: TypographyRule;
	h1: TypographyRule;
	h2: TypographyRule;
	h3: TypographyRule;
	h4: TypographyRule;
	body: TypographyRule;
	label: TypographyRule;
	button: TypographyRule;
}

export const defaultTypographyTheme: TypographyTheme = {
	fontFamily: '"Helvetica", "Arial", sans-serif',
	heading: {
		...defaultTypographyRule,
		fontWeight: 800,
		textTransform: 'capitalize',
	},
	h1: {
		...defaultTypographyRule,
		fontWeight: 800,
		fontSize: '4.8rem',
		textTransform: 'capitalize',
	},
	h2: {
		...defaultTypographyRule,
		fontSize: '3.6rem',
		fontWeight: 800,
		textTransform: 'capitalize',
	},
	h3: {
		...defaultTypographyRule,
		fontSize: '2.4rem',
		fontWeight: 800,
		textTransform: 'capitalize',
	},
	h4: {
		...defaultTypographyRule,
		fontSize: '1.6rem',
		fontWeight: 800,
		textTransform: 'capitalize',
	},
	body: {
		...defaultTypographyRule,
	},
	label: {
		...defaultTypographyRule,
		textTransform: 'capitalize',
	},
	button: {
		...defaultTypographyRule,
		fontWeight: 600,
		textTransform: 'capitalize',
	},
};

export type TypographyThemeData = DeepPartial<TypographyTheme>;

export const createTypographyTheme = (theme?: TypographyThemeData): TypographyTheme => {
	if (!theme) return defaultTypographyTheme;
	const fontFamily = theme.fontFamily ?? defaultTypographyTheme.fontFamily;

	return {
		fontFamily,
		heading: { ...defaultTypographyTheme.heading, fontFamily, ...theme.heading },
		h1: { ...defaultTypographyTheme.h1, fontFamily, ...theme.heading, ...theme.h1 },
		h2: { ...defaultTypographyTheme.h2, fontFamily, ...theme.heading, ...theme.h2 },
		h3: { ...defaultTypographyTheme.h3, fontFamily, ...theme.heading, ...theme.h3 },
		h4: { ...defaultTypographyTheme.h4, fontFamily, ...theme.heading, ...theme.h4 },
		body: { ...defaultTypographyTheme.body, fontFamily, ...theme.body },
		label: { ...defaultTypographyTheme.label, fontFamily, ...theme.label },
		button: { ...defaultTypographyTheme.button, fontFamily, ...theme.button },
	};
};
