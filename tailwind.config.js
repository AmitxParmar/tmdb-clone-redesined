/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    gridTemplateColumns: {
      'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))'
    },
    extend: {
      height: {
        128: '40rem'
      },
      fontFamily: {
        'sans': ['var(--font-raleway)', ...defaultTheme.fontFamily.sans]
      },
    },

    minHeight: {
      128: '40rem'
    }
  },
  plugins: []
};
