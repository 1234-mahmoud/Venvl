module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        fontFamily: {
        worksans: ['Work Sans', 'sans-serif',],
        inter: ['Inter', 'sans-serif',],
      },
      
    },
  },
  plugins: [],
}
