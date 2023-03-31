/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        dark: 'linear-gradient(to right, #000318, #030416, #050513, #070611, #08070e, #08070e, #09070d, #09070d, #0a060f, #0c0410, #0e0311, #100112)',
      },
      screens: {
        xs: '375px',
        xs2: '500px',
        sm2: '700px',
        sm800: '800px',
        sm900: '900px',
        ...defaultTheme.screens,
      },
      spacing: {
        100: '100px',
      },
      colors: {
        red_orange: '#EB5757',
        light_red: '#FF7676',
        white_gray: '#E5E5E5',
        Dark_Red_Secondary: '#662323',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
