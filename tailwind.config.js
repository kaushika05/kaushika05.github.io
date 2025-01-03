/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gradientStart: '#0B132B', // Deep blue start
        gradientEnd: '#1C2541', // Deep blue-black end
        cardStroke: '#ffffff', // White card stroke
        linkHover: '#394867', // Hover effect for links and buttons
        buttonBg: '#14274E', // Button background color
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
