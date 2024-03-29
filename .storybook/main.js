module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-actions',
		'@react-theming/storybook-addon',
	],
	framework: '@storybook/react',
};
