import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	header: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 24
	},
	page_title: {
		marginRight: 'auto'
	},
	return_link: {
		marginRight: 24
	},
	return_button: {
		width: 56,
		height: 56,
		color: '#000'
	}
});
