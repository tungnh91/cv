const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
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
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.brand.700'),
              '&:hover': {
                color: theme('colors.brand.600')
              },
              code: { color: theme('colors.brand.700') }
            },
            blockquote: {
              borderLeftColor: theme('colors.brand.200'),
              color: theme('colors.gray.600')
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.900'),
              'scroll-margin-top': spacing[32]
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            code: { color: theme('colors.brand.700') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.brand.400'),
              '&:hover': {
                color: theme('colors.brand.300')
              },
              code: { color: theme('colors.brand.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.brand.800'),
              color: theme('colors.gray.300')
            },
            'h1,h2,h3,h4': {
              color: theme('colors.white'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') }
              }
            },
            strong: { color: theme('colors.white') },
            thead: {
              th: {
                color: theme('colors.white')
              },
              borderBottomColor: theme('colors.gray.700')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.800')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
