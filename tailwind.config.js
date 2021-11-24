module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layout/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				volt: '#ceff00',
				plat: '#58595b',
				lightgray: '#e5e4ez',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
