import React from 'react';
import { createTheming } from 'react-jss';
import { ColorThemeData, createColorTheme, defaultColorTheme } from './properties/color';
import {
	createTypographyTheme,
	defaultTypographyTheme,
	TypographyThemeData,
} from './properties/typography';

export type Theme = Jss.Theme;

export const defaultTheme: Theme = {
	typography: defaultTypographyTheme,
	color: defaultColorTheme,
};

export type ThemeData = {
	typography?: TypographyThemeData;
	color?: ColorThemeData;
};

export const createTheme = (theme?: ThemeData): Theme => {
	if (!theme) return defaultTheme;
	return {
		typography: createTypographyTheme(theme.typography),
		color: createColorTheme(theme.color),
	};
};

const themeContext = React.createContext(defaultTheme);
export const theming = createTheming(themeContext);
export const { useTheme } = theming;

interface ThemeProviderProps {
	theme?: ThemeData;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
	const completeTheme = createTheme(theme);
	return <theming.ThemeProvider theme={completeTheme}>{children}</theming.ThemeProvider>;
};

export { Color } from './properties/color';
