/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'four': 'repeat(4, 60px)' 
      }
    },
    fontFamily: {
      'mplus2': ['"M PLUS 2"', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
};
