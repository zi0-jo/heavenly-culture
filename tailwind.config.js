/** @type {import('tailwindcss').Config} */

const n1_100 = Array(99)
  .fill(0)
  .reduce((acc, _, i) => ({ ...acc, [i + 1]: `${i + 1}px` }), {});

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: n1_100,
      fontFamily: {
        nanum: ['Nanum Pen Script'],
      },
    },
  },
  plugins: [],
};
