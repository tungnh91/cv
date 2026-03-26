const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ebfbf2',
          100: '#d2f6e2',
          200: '#aceecc',
          300: '#7be3ad',
          400: '#55d997',
          500: '#3ecf8e',
          600: '#26b875',
          700: '#12724c',
          800: '#0d5638',
          900: '#083522'
        },
        gray: {
          0: '#ffffff',
          50: '#f5f8f5',
          100: '#edf2ee',
          200: '#d9e1db',
          300: '#b7c3ba',
          400: '#8b9b8e',
          500: '#667569',
          600: '#4a574d',
          700: '#2f3931',
          800: '#171d19',
          900: '#050706'
        }
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    }
  }
};
