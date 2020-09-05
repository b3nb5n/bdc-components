import { FormModal } from 'bdc-components';
import 'bdc-components/dist/index.css';
import React from 'react';

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
					options: [ 'pizza', 'salad', 'cookies', 'macaroni', 'chicken' ]
				},
				{ type: 'file', name: 'headshot', required: true, helpText: 'is this helpful?' },
				{ type: 'text', name: 'bio', multiline: true }
			]}
			handleSubmit={console.log}
			handleClose={() => console.log('close')}
		/>
	);
};

export default App;
