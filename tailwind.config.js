/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      //Small screen
      md: '768px',
      //Medium screen
      lg: '1028px',
      //Large screen
      xl: '1280px',
      //Extra large screen
      '2xl':'1600px',
      //Twice Extra large screen
      '3xl': '1800px'
      //Thrice Extra large screen
    }
  },
  plugins: [],
}
