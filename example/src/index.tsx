import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormModal, ThemeProvider, PageHeader } from 'bdc-components';
import { ExitToApp as SignInIcon } from '@material-ui/icons';

const App = () => {
	const [ modalOpen, setModalOpen ] = useState(false);
	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	const Header = () => (
		<PageHeader
			title="Sign Up"
			search={() => {}}
			action={openModal}
			actionLabel={<SignInIcon />}
			returnLink="/back"
		/>
	);

	const Modal = () => (
		<FormModal
			name="Sign Up"
			fieldStructures={{
				name: { type: 'text', required: true },
				dob: { type: 'date', required: true },
				food: {
					type: 'option',
					options: [ 'pizza', 'salad', 'cookies', 'macaroni', 'chicken' ],
					required: true
				},
				headshot: { type: 'file', required: true },
				bio: { type: 'text', multiline: true, required: true }
			}}
			validate={fieldValues => {
				if (fieldValues.name !== 'Ben Baldwin') {
					return {
						valid: false,
						errors: { name: 'Imposter!' }
					};
				}
				return {
					valid: true,
					errors: {}
				};
			}}
			onChange={(field, value) => console.log(`${field}: ${value}`)}
			onSubmit={values => {
				console.log(values);
				return new Promise(resolve => setTimeout(resolve, 2000));
			}}
			onClose={closeModal}
		/>
	);

	return (
		<ThemeProvider>
			<Header />
			{modalOpen && <Modal />}
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
