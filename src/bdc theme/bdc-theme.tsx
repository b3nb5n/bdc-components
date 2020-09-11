import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';

export const ThemeProvider: React.FC = ({ children }) => (
	<MuiThemeProvider
		theme={createMuiTheme({
			palette: {
				primary: {
					main: '#496dc2'
				}
			},
			typography: {
				fontFamily: 'din-2014, "Helvetica Neue"',
				h1: {
					fontSize: '56px',
					fontWeight: 800,
					textTransform: 'capitalize'
				},
				h2: {
					fontSize: '36px',
					fontWeight: 800,
					textTransform: 'capitalize'
				},
				button: {
					fontSize: '18px',
					fontWeight: 800,
					textTransform: 'capitalize'
				}
			},
			shape: {
				borderRadius: 0
			}
		})}
	>
		{children}
	</MuiThemeProvider>
);
