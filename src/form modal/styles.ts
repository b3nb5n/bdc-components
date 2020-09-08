import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { root } from '../styles';

export const formModalStyles: { [key: string]: CSSProperties } = {
	scrimming: {
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
		width: '50vw',
		maxWidth: '480px',
		minWidth: '360px',
		maxHeight: 'calc(100vh - 120px)',
		backgroundColor: root.surfaceTwo,
		boxShadow: '0px 12px 12px -6px black',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'relative',
		overflowY: 'auto',
		overflowX: 'hidden'
	},
	card_head: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, .2))',
		position: 'sticky',
		top: 0,
		padding: '40px 60px 15px',
		textAlign: 'center',
		zIndex: 10
	},
	form: {
		width: '100%'
	},
	card_content: {
		padding: '0px 60px 20px',
		width: '100%',
		maxWidth: '100%',
		minWidth: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	card_actions: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		backgroundColor: root.surfaceTwo,
		position: 'sticky',
		zIndex: 3,
		bottom: '0px',
		padding: '24px 60px',
		boxShadow: '0px -2px 7px -6px black'
	},
	card_close: {
		width: '40px',
		height: '40px',
		position: 'absolute',
		left: '24px',
		top: '24px'
	}
};
