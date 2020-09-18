import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormModal, ThemeProvider, bdcTheme, DataTable, PageHeader } from 'bdc-components';
import { PersonAdd as NewUserIcon } from '@material-ui/icons'
import { DeleteOutline as DeleteIcon } from '@material-ui/icons'

type UserData = {
	name: string;
	email: string;
	role: string;
}

type User = {
	id: string
	data: UserData
}

const App = () => {
	const [ users, setUsers ] = useState<User[]>([])
	const [ currentUser, setCurrentUser ] = useState<User | undefined>();
	const [ searchTerm, setSearchTerm ] = useState('')

	const addUser = (data: UserData) => {
		const id = data.name + users.length
		setUsers([ ...users, { id, data }])
		setCurrentUser(undefined)
	}

	const removeCurrentUser = () => {
		const id = currentUser?.id
		const filterdUsers = users.filter(user => user.id !== id)
		setUsers(filterdUsers)
		setCurrentUser(undefined)
	}

	const included = (user: User) =>
		user.data.name.toLowerCase().includes(searchTerm.toLowerCase())

	return (
		<ThemeProvider theme={bdcTheme}>
			<PageHeader
				title='Users'
				action={() => setCurrentUser({id: '', data: { name: '', email: '', role: 'viewer' }})}
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
				itemClickHandler={setCurrentUser}
			/>

			{currentUser && (
				<FormModal
					name={currentUser?.data.name || 'Sign Up'}
					fieldStructures={{
						name: { type: 'text', label: 'Name', required: true },
						email: { type: 'text', label: 'Email', required: true },
						role: { type: 'option', label: 'Role', options: [ 'viewer', 'editor', 'admin', 'owner' ], required: true }
					}}
					initialValues={currentUser?.data}
					actions={[
						{ label: <DeleteIcon />, action: removeCurrentUser },
						{ label: 'Add', validate: true, action: addUser }
					]}
					onClose={() => setCurrentUser(undefined)}
				/>
			)}
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
