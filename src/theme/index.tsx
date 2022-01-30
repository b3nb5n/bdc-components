import React from 'react';
import { createTheming } from 'react-jss';
import { ColorThemeData, createColorTheme, defaultColorTheme } from './properties/color';
import { createMotionTheme, defaultMotionTheme, MotionThemeData } from './properties/motion';
import { createShapeTheme, defaultShapeTheme, ShapeThemeData } from './properties/shape';
import {
	createTypographyTheme,
	defaultTypographyTheme,
	TypographyThemeData,
} from './properties/typography';

export type Theme = Jss.Theme;

export const defaultTheme: Theme = {
	typography: defaultTypographyTheme,
	color: defaultColorTheme,
	shape: defaultShapeTheme,
	motion: defaultMotionTheme,
};

export type ThemeData = {
	typography?: TypographyThemeData;
	color?: ColorThemeData;
	shape?: ShapeThemeData;
	motion?: MotionThemeData;
};

export const createTheme = (theme?: ThemeData): Theme => {
	if (!theme) return defaultTheme;
	return {
		typography: createTypographyTheme(theme.typography),
		color: createColorTheme(theme.color),
		shape: createShapeTheme(theme.shape),
		motion: createMotionTheme(theme.motion),
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
