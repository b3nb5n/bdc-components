import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#496dc2'
		}
	},
	typography: {
		button: {
			fontWeight: 800,
			textTransform: 'capitalize'
		}
	}
});

export const ThemeProvider: React.FC = ({ children }) => <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
