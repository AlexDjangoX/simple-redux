/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000700',
        black1: '#171725',
        blackBG: '#13131a',
        blackBG2: '#1c1c24',
        blackBG3: '#21212b',
        natural: '#f4f4f4',
        natural2: '#f1f1f5',
        natural3: '#696974',
        natural4: '#fafafb',
        natural5: '#f5f5f8',
        naturalColor: '#44444f',
        naturalColor6:'#e2e2ea',
        naturalGray: '#CCCCCC',
        primary: '#0bab7c',
        secondary1: '#c7f4c2',
        secondary2: '#d7d0ff',
        secondary3: '#fddd8c',
        secondary4: '#ffbbd7',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};