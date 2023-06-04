/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background-2.png)',
        blurMobile: 'url(/src/assets/blur-background-mobile.png)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
          800: '#4DC247',
        },
        blue: {
          500: '#81D8F7',
          900: '#0080FF',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
        brand: {
          100: '#8257E5',
          500: '#8257E5',
          900: '#6D4ABC',
        },
      },
    },
  },
  plugins: [],
}
