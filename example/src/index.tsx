import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ThemeProvider, bdcTheme } from 'bdc-components';
import { DeleteOutline as DeleteIcon } from '@material-ui/icons';

const App = () => {
	return (
		<ThemeProvider theme={bdcTheme}>
			<Modal
				title="Contact Submission"
				onClose={() => console.log('close')}
				actions={[ { action: () => console.log('delete'), label: <DeleteIcon /> } ]}
			>
				<p>Hello kiddos</p>
			</Modal>
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
