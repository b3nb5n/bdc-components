import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormModal, ThemeProvider, bdcTheme, DataTable } from 'bdc-components';
import { AccountCircleOutlined as UserIcon } from '@material-ui/icons';

interface User {
	name: string;
	email: string;
	role: string | null;
}

const App = () => {
	const [ user, setUser ] = useState<User | undefined>();

	const Modal = () => (
		<FormModal
			name={user?.name || 'Sign Up'}
			fieldStructures={{
				name: { type: 'text' },
				email: { type: 'text' },
				role: { type: 'option', options: [ 'viewer', 'editor', 'admin', 'owner' ] }
			}}
			initialValues={user}
			onSubmit={values => {
				console.log(values);
				return new Promise(resolve => setTimeout(resolve, 2000));
			}}
			onClose={() => setUser(undefined)}
		/>
	);

	const Table = () => (
		<DataTable
			fieldMap={{
				email: { label: 'Email', columnTemplate: 2 },
				name: { label: 'Name', columnTemplate: 2 },
				role: { label: 'Role' }
			}}
			identifyingField="name"
			items={[ { email: 'ben@baldwindesign.co', name: 'Ben Baldwin', role: 'owner', uid: 'ivheiv' } ]}
			itemIcon={<UserIcon />}
			itemClickHandler={setUser}
		/>
	);

	return (
		<ThemeProvider theme={bdcTheme}>
			<Table />
			{user && <Modal />}
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
