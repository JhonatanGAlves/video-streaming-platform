/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          300: '#F27C54',
          500: '#EF5F2E',
          800: '#E44611'
        },
        blue: {
          500: '#81D8F7'
        },
        yellow: {
          500: '#FBA94C'
        },
        red: {
          500: '#F75A68'
        },
        gray: {
          0: '#FFFFFF',
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      }
    },
  },
  plugins: [],
}
