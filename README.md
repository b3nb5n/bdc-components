# bdc-components

> React components for visualizing and collecting data.

[![NPM](https://img.shields.io/npm/v/bdc-components.svg)](https://www.npmjs.com/package/bdc-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bdc-components
```

## Usage

```tsx
<ThemeProvider theme={bdcTheme}>
	/* { ... } */
</ThemeProvider>

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
	onClose={() => console.log('close')}
/>

<DataTable
	fieldMap={{
		email: { label: 'Email', columnTemplate: 2 },
		name: { label: 'Name', columnTemplate: 2 },
		role: { label: 'Role' }
	}}
	identifyingField="name"
	items={{ jason: { email: 'jason@baldwindesign.co', name: 'Jason', role: 'Admin' } }}
	itemIcon={<UserIcon />}
	itemClickHandler={userData => setUser(userData)}
/>

<Button action={() => setUser(newUser)}>
	/* Icon or Text */
</Button>
```

## License

MIT © [baldwin-design-co](https://github.com/baldwin-design-co)
