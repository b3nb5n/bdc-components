# bdc-components

> My component library built ontop of material ui

[![NPM](https://img.shields.io/npm/v/bdc-components.svg)](https://www.npmjs.com/package/bdc-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bdc-components
```

## Usage

```tsx
<ThemeProvider theme={bdcTheme}>
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
</ThemeProvider>
```

## License

MIT © [baldwin-design-co](https://github.com/baldwin-design-co)
