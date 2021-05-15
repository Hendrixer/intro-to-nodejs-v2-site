module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
    
  backgroundColor: theme => ({
    ...theme('colors'),
    dark: {
      DEFAULT: '#121212'
    }
  }),
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
}
