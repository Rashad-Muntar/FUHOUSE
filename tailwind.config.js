/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors: {
      primary: {
        default: '#1D3951',
        100: '#F0F4F7',
        200: '#A4A4A4',
        300: '#1d3951b3',
      },
      secondary: {
        default: '#FFBB38',
        100: '#FFBB3811',
        500: '#936D25',
      },
      background: '#E5E5E5',
      white: '#ffffff',
      primaryRed: '#FF0000',
      mobileMenuOverlay: 'rgba(255, 255, 255, 0.01)',
      greenColor: {
        default: '#18AF7C',
        100: 'rgba(24, 175, 124, 0.1)',
      },
    },
  },
  plugins: [],
}
