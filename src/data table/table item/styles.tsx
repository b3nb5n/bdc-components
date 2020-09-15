import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	table_item: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		backgroundColor: '#fafafa',
		padding: '12px 36px',
		gridAutoFlow: 'column',
		gridAutoColumns: '1fr',
		columnGap: 12,
		transition: '200ms ease',
		alignItems: 'center',
		justifyContent: 'start',
		cursor: 'default',
		'&>*': {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap'
		},
		'&:hover': {
			backgroundColor: '#fff'
		}
	}
});
