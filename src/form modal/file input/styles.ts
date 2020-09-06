import { CSSProperties } from 'react';

export const styles: { [key: string]: CSSProperties } = {
	file_upload: {
		margin: '16px 0 8px',
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: '#ccc',
		width: '100%',
		height: '105px',
		maxWidth: '360px',
		position: 'relative',
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
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
		color: 'rgba(0, 0, 0, 0.54)',
		fontWeight: 800,
		textAlign: 'center',
		fontSize: '1rem',
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
		color: 'rgba(0, 0, 0, 0.54)',
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
	},
	error: {
		borderColor: '#f44336',
		color: '#f44336'
	}
};
