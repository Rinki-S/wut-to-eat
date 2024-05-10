/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.js', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
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
