/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF7',
          100: '#FAF7EE',
          200: '#F4ECD8',
          DEFAULT: '#FAF7EE'
        },
        beige: {
          50: '#FAF6F0',
          100: '#F2EAE1',
          200: '#E5D5C3',
          300: '#D4BFA6',
          DEFAULT: '#F2EAE1'
        },
        velourabrown: {
          light: '#8E7B70',
          DEFAULT: '#5A4E47',
          dark: '#2A2320',
          deep: '#1D1715'
        },
        dustypink: {
          50: '#FAF3F3',
          100: '#F6E6E6',
          200: '#ECBFC1',
          300: '#D9989B',
          DEFAULT: '#D9989B',
          dark: '#B57376'
        },
        gold: {
          100: '#F4ECE1',
          200: '#E8D9C2',
          300: '#D9C19D',
          DEFAULT: '#C5A059',
          dark: '#A37E3E'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -15px rgba(90, 78, 71, 0.1)',
        'luxury-lg': '0 20px 40px -20px rgba(90, 78, 71, 0.15)',
        'luxury-xl': '0 30px 60px -25px rgba(90, 78, 71, 0.2)',
      }
    },
  },
  plugins: [],
}
