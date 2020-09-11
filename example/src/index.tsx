import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormModal, ThemeProvider, Button } from 'bdc-components';

const App = () => {
	const [ modalOpen, setModalOpen ] = useState(false);
	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

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
			onSubmit={values => {
				console.log(values);
				return new Promise(resolve => setTimeout(resolve, 2000));
			}}
			onClose={closeModal}
		/>
	);

	return (
		<ThemeProvider>
			<Button action={openModal}>Sign Up</Button>
			{modalOpen && <Modal />}
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
