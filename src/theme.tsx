import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { root } from './styles';

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: root.primary
		}
	},
	typography: {
		button: {
			fontWeight: 800,
			textTransform: 'capitalize'
		}
	},
	shape: {
		borderRadius: 0
	}
});

export const ThemeProvider: React.FC = ({ children }) => <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
