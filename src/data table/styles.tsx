import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	table: {
		boxSizing: 'border-box',
		width: '100%',
		borderWidth: 4,
		borderColor: theme.palette.grey[300],
		borderStyle: 'solid',
		padding: '12px 0',
		marginBottom: 48,
		maxHeight: 'calc(100vh - 256px)',
		overflowY: 'auto',
		backgroundColor: '#fafafa'
	},
	table_head: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		backgroundColor: theme.palette.grey[300],
		padding: '24px 36px 20px',
		gridAutoFlow: 'column',
		gridAutoColumns: '1fr',
		columnGap: 12
	}
}));
