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
				name: { type: 'text' },
				dob: { type: 'date' },
				food: {
					type: 'option',
					options: [ 'pizza', 'salad', 'cookies', 'macaroni', 'chicken' ]
				},
				headshot: { type: 'file' },
				bio: { type: 'text', multiline: true }
			}}
			onSubmit={console.log}
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
