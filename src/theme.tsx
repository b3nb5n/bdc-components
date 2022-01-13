import { merge } from 'lodash';
import React from 'react';
import { createTheming } from 'react-jss';
import DeepPartial from './utils/deep-partial';

interface TypographyRule {
	fontFamily: string;
	fontWeight: string;
	fontStyle: string;
	textTransform: string;
}

const defaultTypographyRule: TypographyRule = {
	fontFamily: '"Helvetica", "Arial", sans-serif',
	fontWeight: 'normal',
	fontStyle: 'normal',
	textTransform: 'none',
};

export interface TypographyTheme {
	fontFamily: string;
	heading: TypographyRule;
	h1: TypographyRule;
	h2: TypographyRule;
	h3: TypographyRule;
	h4: TypographyRule;
	body: TypographyRule;
	label: TypographyRule;
	button: TypographyRule;
}

const defaultTypographyTheme: TypographyTheme = {
	fontFamily: '"Helvetica", "Arial", sans-serif',
	heading: defaultTypographyRule,
	h1: defaultTypographyRule,
	h2: defaultTypographyRule,
	h3: defaultTypographyRule,
	h4: defaultTypographyRule,
	body: defaultTypographyRule,
	label: defaultTypographyRule,
	button: defaultTypographyRule,
};

export interface ColorTheme {
	primary: string;
	background: string;
	error: string;
}

const defaultColorTheme: ColorTheme = {
	primary: '#000',
	background: '#FFF',
	error: '#F00',
};

export interface ShapeTheme {
	borderRadius: number;
	density: number;
	size: number;
}

const defaultShapeTheme: ShapeTheme = {
	borderRadius: 4,
	density: 1,
	size: 1,
};

export interface MotionTheme {
	disableAnimation: boolean;
	animationSpeed: number;
}

const defaultMotionTheme: MotionTheme = {
	disableAnimation: false,
	animationSpeed: 1,
};

export type Theme = Jss.Theme;

export const defaultTheme: Theme = {
	typography: defaultTypographyTheme,
	color: defaultColorTheme,
	shape: defaultShapeTheme,
	motion: defaultMotionTheme,
};

export const createTheme = (theme: DeepPartial<Theme>): Theme =>
	merge({ ...defaultTheme }, theme);

const themeContext = React.createContext(defaultTheme);
export const theming = createTheming(themeContext);
export const { useTheme } = theming;

interface ThemeProviderProps {
	theme?: DeepPartial<Theme>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
	theme,
	children,
}) => {
	const completeTheme = merge({ ...defaultTheme, theme });

	return (
		<theming.ThemeProvider theme={completeTheme}>{children}</theming.ThemeProvider>
	);
};
