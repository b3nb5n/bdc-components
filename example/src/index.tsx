import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormModal, Button, ThemeProvider } from 'bdc-components';
import { ExitToApp as SignInIcon } from '@material-ui/icons';

const App = () => {
	const [ modalOpen, setModalOpen ] = useState(false);
	const openModal = async () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	const Modal = () => (
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
			onSubmit={values => {
				console.log(values);
				return new Promise(resolve => setTimeout(resolve, 2000));
			}}
			onClose={closeModal}
		/>
	);

	return (
		<ThemeProvider>
			<Button action={openModal}>
				<SignInIcon />
			</Button>
			{modalOpen && <Modal />}
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
