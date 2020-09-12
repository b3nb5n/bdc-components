import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	file_upload: {
		boxSizing: 'border-box',
		margin: '16px 0 8px',
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: '#ccc',
		borderRadius: theme.shape.borderRadius,
		width: '100%',
		height: '105px',
		maxWidth: '360px',
		position: 'relative',
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		outline: 'none',
		'&:hover': {
			borderColor: '#212121'
		},
		'&:focus': {
			borderColor: theme.palette.primary.main,
			borderWidth: 2
		}
	},
	upload_overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.text.secondary,
		fontFamily: theme.typography.fontFamily,
		fontWeight: theme.typography.fontWeightRegular,
		textAlign: 'center',
		zIndex: 1
	},
	image_preview: {
		width: '100%',
		filter: 'blur(2px)',
		opacity: '50%'
	},
	help_text: {
		margin: '4px 14px 0',
		fontSize: '0.75rem',
		lineHeight: 1.66,
		color: theme.palette.text.secondary,
		...theme.typography.caption
	},
	error: {
		color: theme.palette.error.main,
		borderColor: theme.palette.error.main,
		'&:hover': {
			borderColor: theme.palette.error.main
		}
	}
}));
