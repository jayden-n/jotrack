/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'milky': '#E6E0E0',
      'purple': "#5D1576",
      'gray': 'rgba(0, 0, 0, 0.54)',
      'white': '#FFFFFF',
      'lightblue': '#40AEF2',
      'lightgrey': 'rgba(217, 217, 217, 0.67)'
    }
  },
  plugins: [],
}