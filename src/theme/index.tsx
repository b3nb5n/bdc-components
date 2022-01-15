import { merge } from 'lodash';
import React from 'react';
import { createTheming } from 'react-jss';
import { defaultColorTheme } from './properties/color';
import { defaultMotionTheme } from './properties/motion';
import { defaultShapeTheme } from './properties/shape';
import { createTypographyTheme, defaultTypographyTheme } from './properties/typography';

export type Theme = Jss.Theme;

export const defaultTheme: Theme = {
	typography: defaultTypographyTheme,
	color: defaultColorTheme,
	shape: defaultShapeTheme,
	motion: defaultMotionTheme,
};

export const createTheme = (theme: DeepPartial<Theme>): Theme => ({
	typography: createTypographyTheme(theme.typography ?? {}),
	color: merge({ ...defaultColorTheme }, theme.color),
	shape: merge({ ...defaultShapeTheme }, theme.shape),
	motion: merge({ ...defaultMotionTheme }, theme.motion),
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
