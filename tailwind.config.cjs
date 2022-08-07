/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#040405',
        'secondary-dark': '#0c0d10',
        'primary-blue': '#3a71c1',
      },
      backgroundImage: {
        main: 'radial-gradient(circle at top center, #14151b, #0c0d10)',
      },
    },
  },
  plugins: [],
};
