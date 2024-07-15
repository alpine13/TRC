/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bookmark-purple': '#E9623B',
        'bookmark-red': '#F04848',
        'bookmark-blue': '#242A45',
        'bookmark-grey': '#9194A2',
        'bookmark-white': '#f7f7f7',
        'hover-colour': '#FF7373'
      },
      scale: {
        175: '1.75',
        98: '0.98'
      }
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
      Lucky: ['Luckiest Guy, Poppins, sans-serif']
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px'
      }
    }
  },
  variants: {
    extend: {}
  }
};
