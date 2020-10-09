import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	form: {
		boxSizing: 'border-box',
		width: '100%',
		maxWidth: '100%',
		minWidth: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	scrimming: {
		boxSizing: 'border-box',
		position: 'fixed',
		zIndex: 10,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		margin: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		backdropFilter: 'blur(2px)'
	},
	card: {
		boxSizing: 'border-box',
		width: '80%',
		maxWidth: '480px',
		minWidth: '360px',
		maxHeight: 'calc(100vh - 120px)',
		backgroundColor: 'white',
		boxShadow: '0px 12px 12px -6px black',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'relative',
		overflowY: 'auto',
		overflowX: 'hidden'
	},
	card_head: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		background:
			'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, .2))',
		position: 'sticky',
		top: 0,
		padding: '40px 60px 15px',
		textAlign: 'center',
		zIndex: 2
	},
	card_content: {
		boxSizing: 'border-box',
		padding: '0px 60px 20px',
		width: '100%'
	},
	card_actions: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'flex',
		fleDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: 'white',
		position: 'sticky',
		zIndex: 3,
		bottom: 0,
		padding: '24px 54px 24px 60px',
		boxShadow: '0px -2px 7px -6px black'
	},
	close_button: {
		position: 'absolute',
		left: '24px',
		top: '24px'
	}
});
