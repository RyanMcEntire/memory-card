/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grayLavender: '#e3c9cb',
        deepPurple: '#31293F',
        lightBrown: '#dd9c7f',
      },
    },
  },
  plugins: [],
};
