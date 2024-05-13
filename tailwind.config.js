/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.js', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      spacing: {
        full: '100%',
        '2px': '2px',
        '10px': '10px',
      },
      borderRadius: {
        '3px': '3px',
      },
      colors: {},
      fontFamily: {
        inter: ['"Inter"', '"Noto Sans SC"', 'sans-serif'],
        sans: ['"Satoshi"', '"Noto Sans SC"', 'sans-serif'],
        noto: ['"Noto Sans SC"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')],
};
