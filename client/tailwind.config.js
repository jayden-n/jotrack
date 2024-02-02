/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				outfit: ['outfit', 'sans-serif'], // logo font
				poppins: ['poppins', 'sans-serif'], // app font
			},
		},

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
			red: '#FF0000',
			notTooWhite: '#fcf6ff',
			violet: '#6A1B9A',
			formGrey: '#f5f5f5',
			formSky: '#0ea5e9',
			hoverSky: '#0369a1',
			orange: '#FB7F0A',
			bgOrange: '#fef3c7',
			passwordGrey: '#E8E8E8',
			updateBtnColor: '#33A7EF',
			black: '#000000',
			cancelRed: '#C71F08',
			grey500: '#9e9e9e',
			snow: '#FBFBFB',
			// slate colors
			slate300: '#CBD5E1',
			slate400: '#94a3b8',
			slate500: '#64748B',
			slate600: '#475569',
			slate700: '#334155',
			slate800: '#1e293b',
			slate900: '#0F172A',
			// indigo colors:
			indigo300: '#A5B4FC',
			indigo400: '#518CF8',
			indigo500: '#6366F1',
			indigo600: '#4f46e5',
			// violet colors:
			violet600: '#7c3aed',

			// pink colors:
			pink500: '#ec4899',
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
