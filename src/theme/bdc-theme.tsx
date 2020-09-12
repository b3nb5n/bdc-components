import { createMuiTheme } from '@material-ui/core/styles';

export const bdcTheme = createMuiTheme({
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
			fontSize: '16px',
			fontWeight: 800,
			textTransform: 'capitalize',
			lineHeight: '24px'
		}
	},
	shape: {
		borderRadius: 0
	}
});
