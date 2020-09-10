import React from 'react';
import ReactDOM from 'react-dom';
import { FormModal, PageHeader, ThemeProvider } from 'bdc-components';
import 'bdc-components/dist/index.css';

const ExampleForm = () => (
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
);

const App = () => (
	<ThemeProvider>
		<PageHeader
			title="Page Header"
			action={() => console.log('run action')}
			search={(searchTerm: string) => console.log(`search: ${searchTerm}`)}
		/>
		<ExampleForm />
	</ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
