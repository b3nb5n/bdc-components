# bdc-components

> React components for visualizing and collecting data.

[![NPM](https://img.shields.io/npm/v/bdc-components.svg)](https://www.npmjs.com/package/bdc-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bdc-components
```

## Usage

```tsx
import React from 'react'
import { FormModal } from 'bdc-components'

const App = () => {
	return (
		<FormModal
			name="Sign Up"
			fieldStructures={[
				{ type: 'text', name: 'name', helpText: 'is this helpful', required: true },
				{ type: 'date', name: 'dob' },
				{
					type: 'option',
					name: 'favorite food',
					options: [ 'pizza', 'salad', 'cookies', 'macaroni', 'chicken' ],
					multi: true
				},
				{
					type: 'file',
					name: 'headshot',
					helpText: 'is this helpful',
					required: true
				},
				{ type: 'text', name: 'bio', multiline: true }
            ]}
            initialValues={{
                dob: new Date(),
                headshot: 'https://www.example.com/assets/initialimage.jpg'
            }}
			handleSubmit={console.log}
			handleClose={() => console.log('close')}
		/>
	);
};
```

## License

MIT © [baldwin-design-co](https://github.com/baldwin-design-co)
