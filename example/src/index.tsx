import React from 'react';
import ReactDOM from 'react-dom';
import { FormModal } from 'bdc-components';

const App = () => (
	<FormModal
		name="Sign Up"
		fieldStructures={{
			name: { type: 'text' },
			dob: { type: 'date' },
			food: {
				type: 'option',
				options: [ 'pizza', 'salad', 'cookies', 'macaroni', 'chicken' ]
			},
			headshot: { type: 'file' },
			bio: { type: 'text', multiline: true }
		}}
		handleSubmit={console.log}
		handleClose={() => console.log('close')}
	/>
);

ReactDOM.render(<App />, document.getElementById('root'));
