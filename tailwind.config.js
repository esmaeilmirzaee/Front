const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      coolGray: colors.coolGray,
      warmGray: colors.warmGray,
      amber: colors.amber,
      orange: colors.orange,
      lime: colors.lime,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
