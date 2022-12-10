/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			white: '#fcfdfd',
			black: '#000000',
			stormy: '#323334',
			smoke: '#4e4f51',
			ash: '#7c7f84',
			linen: '#f8f4e7',
			oyster: '#dfdedb',
			cloudy: '#f5f4f3',
			opal: '#384353',
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			serif: ['Roboto', 'serif'],
		},
		extend: {},
	},
	plugins: [],
};
