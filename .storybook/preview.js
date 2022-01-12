export const parameters = {
	actions: { argTypesRegex: '^on\\W+' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
