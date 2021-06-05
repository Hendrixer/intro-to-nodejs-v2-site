module.exports = {
  backgroundColor: theme => ({
    ...theme('colors'),
    midnight: '#121212',
  }),
  colors: theme => ({
    ...theme('colors'),
    midnight: '#121212',
  }),
  darkMode: 'class', // or 'media' or 'class'
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
}
