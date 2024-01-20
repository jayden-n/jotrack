/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			purple: '#5D1576',
			gray: 'rgba(0, 0, 0, 0.54)',
			white: '#FFFFFF',
			lightblue: '#40AEF2',
			lightgrey: 'rgba(217, 217, 217, 0.67)',
			indigo: '#e8eaf6',
			blue: '#1976d2',
			btnPurple: 'rgba(93, 21, 118, 0.82)',
			indigoHover: '#9fa8da',
			btnLightpink: '#FCF6FF',
			green: '#03B303',
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		},
	},
	plugins: [],
};
