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
		h3: {
			fontSize: '18px',
			fontWeight: 800,
			textTransform: 'capitalize'
		},
		h4: {
			fontSize: '16px',
			fontWeight: 800,
			textTransform: 'capitalize'
		},
		body1: {
			fontSize: '16px'
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
