import { Form } from 'bdc-components';
import 'bdc-components/dist/index.css';
import React from 'react';

const App = () => {
	return (
		<Form
			name="Test Form"
			fieldStructures={[
				{ type: 'text', name: 'first name', helpText: 'helper text' },
				{ type: 'text', name: 'last name' },
				{ type: 'option', name: 'favorite food', options: [ 'pizza', 'salad' ], multi: true },
				{ type: 'date', name: 'date of birth' }
			]}
			initialValues={{
				'first name': '',
				'last name': '',
				'favorite food': null,
				'date of birth': null
			}}
			onSubmit={(data: { [key: string]: string | string[] | Date | null }) => {
				Object.keys(data).forEach(key => console.log(`${key}: `, data[key]));
			}}
			onClose={() => console.log('close')}
		/>
	);
};

export default App;
