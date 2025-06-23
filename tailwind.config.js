/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['var(--font-work-sans)'],
        inter: ['var(--font-inter)'],
        geist: ['var(--font-geist-sans)'],
        geistmono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};
