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
	lineHeight: 1.2,
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
	h1: {
		...defaultTypographyRule,
		fontWeight: 800,
		fontSize: '3rem',
		textTransform: 'capitalize',
	},
	h2: {
		...defaultTypographyRule,
		fontSize: '2.5rem',
		fontWeight: 800,
		textTransform: 'capitalize',
	},
	h3: defaultTypographyRule,
	h4: defaultTypographyRule,
	body: {
		...defaultTypographyRule,
		lineHeight: 1.6,
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

export const createTypographyTheme = (
	theme?: DeepPartial<TypographyTheme>
): TypographyTheme => {
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
