import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormModal, ThemeProvider } from 'bdc-components';
import 'bdc-components/dist/index.css';

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
			actions={[ { name: 'save', label: 'Save', action: console.log } ]}
			handleClose={closeModal}
		/>
	);

	return (
		<ThemeProvider>
			<button onClick={openModal}>Open Form</button>
			{modalOpen && <Modal />}
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
