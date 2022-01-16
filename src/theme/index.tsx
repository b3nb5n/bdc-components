import React from 'react';
import { createTheming } from 'react-jss';
import DeepPartial from '../types/deep-partial';
import { ColorTheme, createColorTheme, defaultColorTheme } from './properties/color';
import { createMotionTheme, defaultMotionTheme } from './properties/motion';
import { createShapeTheme, defaultShapeTheme } from './properties/shape';
import { createTypographyTheme, defaultTypographyTheme } from './properties/typography';

export type Theme = Jss.Theme;

export const defaultTheme: Theme = {
	typography: defaultTypographyTheme,
	color: defaultColorTheme,
	shape: defaultShapeTheme,
	motion: defaultMotionTheme,
};

export const createTheme = (theme: DeepPartial<Theme>): Theme => ({
	typography: createTypographyTheme(theme.typography),
	// TODO: fix DeepPartial<ColorTheme>
	color: createColorTheme(theme.color as ColorTheme),
	shape: createShapeTheme(theme.shape),
	motion: createMotionTheme(theme.motion),
});

const themeContext = React.createContext(defaultTheme);
export const theming = createTheming(themeContext);
export const { useTheme } = theming;

interface ThemeProviderProps {
	theme?: DeepPartial<Theme>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
	const completeTheme = createTheme(theme ?? {});
	return <theming.ThemeProvider theme={completeTheme}>{children}</theming.ThemeProvider>;
};

export { Color } from './properties/color';
