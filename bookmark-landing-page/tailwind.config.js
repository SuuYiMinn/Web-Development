/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      secondWhite: '#dfe3eb',
      softBlue: 'hsl(231, 69%, 60%)',
      softRed: 'hsl(0, 94%, 66%)',
      grayishBlue: 'hsl(229, 8%, 60%)',
      darkBlue: 'hsl(229, 31%, 21%)'
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {},
  },
  plugins: [],
}

