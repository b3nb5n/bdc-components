import React from 'react';
import ReactDOM from 'react-dom';
import { FormModal, ThemeProvider } from 'bdc-components';
import 'bdc-components/dist/index.css';

const App = () => (
	<ThemeProvider>
		<FormModal
			name="Sign Up"
			fieldStructures={{
				name: { type: 'text' },
				dob: { type: 'date' },
				food: {
					type: 'option',
					options: [ 'pizza', 'salad', 'cookies', 'macaroni', 'chicken' ]
				},
				headshot: { type: 'file', required: true },
				bio: { type: 'text', multiline: true }
			}}
			handleSubmit={console.log}
			handleClose={() => console.log('close')}
		/>
	</ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
