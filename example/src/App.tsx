import { Form, Input } from 'bdc-components';
import 'bdc-components/dist/index.css';
import React from 'react';

const App = () => {
	return (
		<Form>
			<Input name="test" />
			<Input name="inputTwo" inputType="tel" value={4} />
		</Form>
	);
};

export default App;
