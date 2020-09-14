import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormModal, Button, ThemeProvider, bdcTheme, DataTable } from 'bdc-components';
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

	const Table = () => (
		<DataTable
			fieldMap={{ name: { label: 'Name', columnTemplate: 2 }, email: { label: 'Email' } }}
			items={{ ben: { name: 'Ben', email: 'ben@baldwindesign.co' } }}
			itemClickHandler={(data, identifier) => console.log(`${identifier}: `, data)}
		/>
	);

	return (
		<ThemeProvider theme={bdcTheme}>
			<Button action={openModal}>
				<SignInIcon />
			</Button>
			<Table />
			{modalOpen && <Modal />}
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
