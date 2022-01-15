import { merge } from 'lodash';

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
	fontSize: '16px',
	fontWeight: 'normal',
	fontStyle: 'normal',
	lineHeight: 1.5,
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
	heading: defaultTypographyRule,
	h1: defaultTypographyRule,
	h2: defaultTypographyRule,
	h3: defaultTypographyRule,
	h4: defaultTypographyRule,
	body: defaultTypographyRule,
	label: defaultTypographyRule,
	button: {
		fontFamily: '"Helvetica", "Arial", sans-serif',
		fontSize: '16px',
		fontStyle: 'normal',
		fontWeight: 600,
		lineHeight: 1.2,
		textTransform: 'capitalize',
	},
};

export const createTypographyTheme = (theme: DeepPartial<TypographyTheme>): TypographyTheme => {
	const resultTheme: TypographyTheme = merge({ ...defaultTypographyTheme }, theme);

	// Font family inheritence
	const fontFamily = theme.fontFamily ?? defaultTypographyTheme.fontFamily;
	const headingFontFamily = theme.heading?.fontFamily ?? fontFamily;
	resultTheme.heading.fontFamily = headingFontFamily;
	resultTheme.h1.fontFamily = theme.h1?.fontFamily ?? headingFontFamily;
	resultTheme.h2.fontFamily = theme.h2?.fontFamily ?? headingFontFamily;
	resultTheme.h3.fontFamily = theme.h3?.fontFamily ?? headingFontFamily;
	resultTheme.h4.fontFamily = theme.h4?.fontFamily ?? headingFontFamily;
	resultTheme.body.fontFamily = theme.body?.fontFamily ?? fontFamily;
	resultTheme.label.fontFamily = theme.label?.fontFamily ?? fontFamily;
	resultTheme.button.fontFamily = theme.button?.fontFamily ?? fontFamily;

	return resultTheme;
};
