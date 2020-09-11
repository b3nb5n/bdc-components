import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	button: {
		margin: '0 6px',
		padding: '6px 24px'
	},
	button_wrapper: {
		position: 'relative'
	},
	button_spinner: {
		position: 'absolute',
		color: theme.palette.primary.contrastText
	},
	children: {
		display: 'flex'
	}
}));
