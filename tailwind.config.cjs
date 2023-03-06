/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Archivo', 'sans-serif'],
    },
    fontWeight: {
      black: 900,
      bold: 'bold',
      normal: 'normal',
      light: 'lighter',
    },
  },
  plugins: [],
};
