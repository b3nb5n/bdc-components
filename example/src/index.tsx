import React from 'react';
import ReactDOM from 'react-dom';
import { FormModal } from 'bdc-components';

const App = () => {
	return (
		<FormModal
			name="Sign Up"
			fieldStructures={[
				{ type: 'text', name: 'name', helpText: 'is this helpful', required: true },
				{ type: 'date', name: 'dob' },
				{
					type: 'option',
					name: 'favorite food',
					options: [ 'pizza', 'salad', 'cookies', 'macaroni', 'chicken' ],
					multi: true
				},
				{
					type: 'file',
					name: 'headshot',
					helpText: 'is this helpful?',
					required: true
				},
				{ type: 'text', name: 'bio', multiline: true }
			]}
			handleSubmit={console.log}
			handleClose={() => console.log('close')}
		/>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
