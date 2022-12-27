/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '00d3a6',
        primary: '#26A69A',
        primaryLight: '#4DB6AC',
        bgLogin: '#edf2f9',
        secondary: '#616161',
        secondaryLight: '#757575',
        danger: '#F44336',
        dangerLight: '#EF5350',
        warning: '#FFC107',
        warningLight: '#FFCA28',
        loginSideColor: '#14b8a6',
        loginSideColorLight: '#18ceba'
      }
    },
  },
  plugins: [],
}
