const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Barlow Semi Condensed', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xxs: '.6875rem',
      xs: '.8125rem',
      base: '1rem',
      xl: '1.25rem',
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      gray: {
        light: 'hsl(0, 0%, 81%)',
      },
      violet: 'hsl(263, 55%, 52%)',
      'blue-gray': {
        light: 'hsl(210, 46%, 95%)',
        dark: 'hsl(217, 19%, 35%)',
        darker: 'hsl(219, 29%, 14%)',
      },
    },
    extend: {
      lineHeight: {
        4.5: '1.125rem',
        auto: 'normal',
      },
      spacing: {
        4.5: '1.125rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        18: '4.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
