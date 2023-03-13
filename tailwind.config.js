/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      width: {
        360: '360px',
      },
      height: {
        640: '640px',
      },
      colors: {
        accentBg: 'rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
