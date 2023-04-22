/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'white-theme': '#e4e4e4',
        'black-theme': '#1b1c1e',
        'light-red-theme': '#ff2b2b',
        'dark-red-theme': '#c60000'
      },
      colors: {
        'white-theme': '#e4e4e4',
        'black-theme': '#1b1c1e',
        'light-red-theme': '#be0000',
        'dark-red-theme': '#ff2832'
      },
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
