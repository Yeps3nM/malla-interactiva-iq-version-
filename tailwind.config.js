
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        violet : colors.violet,
        cyan: colors.cyan,
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
