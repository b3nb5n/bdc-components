import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormModal, ThemeProvider, bdcTheme, DataTable, PageHeader } from 'bdc-components';
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
	const [ searchTerm, setSearchTerm ] = useState('')

	const users = [
		{
			id: 'XcMK0lBy1bAlywjmHY4z',
			data: {
				name: 'Test User 1',
				email: 'test@example.com',
				role: 'admin'
			}
		},
		{
			id: 'E9yR2Qokdqwo95VSTApN',
			data: {
				name: 'Test User 2',
				email: 'test2@example.com',
				role: 'editor'
			}
		}
	]

	const included = (user: User) =>
		user.data.name.toLowerCase().includes(searchTerm.toLowerCase())

	return (
		<ThemeProvider theme={bdcTheme}>
			<PageHeader
				title='Users'
				action={() => setUser({id: '', data: { name: '', email: '', role: null }})}
				actionLabel={<NewUserIcon />}
				search={setSearchTerm}
			/>

			<DataTable
				fieldMap={{
					name: {columnTemplate: 2},
					email: {columnTemplate: 3},
					role: {columnTemplate: 1},
				}}
				identifyingField="name"
				items={users.filter(included)}
				itemClickHandler={setUser}
			/>

			{user && (
				<FormModal
					name={user?.data.name || 'Sign Up'}
					fieldStructures={{
						name: { type: 'text', label: 'Name', required: true },
						email: { type: 'text', label: 'Email', required: true },
						role: { type: 'option', label: 'Role', options: [ 'viewer', 'editor', 'admin', 'owner' ], required: true }
					}}
					initialValues={user?.data}
					onSubmit={values => {
						console.log(values);
						return new Promise(resolve => setTimeout(resolve, 2000));
					}}
					onClose={() => setUser(undefined)}
				/>
			)}
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
