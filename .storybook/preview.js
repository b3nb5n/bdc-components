import { ThemeProvider } from '../src/theme';

export const parameters = {
	actions: { argTypesRegex: '^on\\W+' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<ThemeProvider>
			<Story />
		</ThemeProvider>
	),
];
