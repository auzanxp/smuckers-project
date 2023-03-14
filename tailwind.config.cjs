/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4783FE',
        primaryLogin: '#212327',
        formColor: '#414654',
      },
    },
  },
  plugins: [],
};
