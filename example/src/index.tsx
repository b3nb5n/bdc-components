import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormModal, ThemeProvider, bdcTheme, DataTable, PageHeader } from 'bdc-components';
import { AccountCircleOutlined as UserIcon } from '@material-ui/icons';
import { PersonAdd as NewUserIcon } from '@material-ui/icons'

interface User {
	id: string
	data: {
		name: string;
		email: string;
		role: string | null;
	}
}

const App = () => {
	const [ user, setUser ] = useState<User | undefined>();

	const Modal = () => (
		<FormModal
			name={user?.data.name || 'Sign Up'}
			fieldStructures={{
				name: { label: 'name', required: true, type: 'text' },
				scope: { label: 'Scope', multi: true, options: ["brand strategy","identity design","website"], required: true, type: 'option' }
			}}
			initialValues={user?.data}
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
			items={[ { id: 'ivuvuv', data: { email: 'ben@baldwindesign.co', name: 'Ben Baldwin', role: 'owner' } } ]}
			itemIcon={<UserIcon />}
			itemClickHandler={setUser}
		/>
	);

	const Header = () => (
		<PageHeader
			title='Users'
			action={() => setUser({id: '', data: { name: '', email: '', role: null }})}
			actionLabel={<NewUserIcon />}
			search={() => {}}
		/>
	)

	return (
		<ThemeProvider theme={bdcTheme}>
			<Header />
			<Table />
			{user && <Modal />}
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
