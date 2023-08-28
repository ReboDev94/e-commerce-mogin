import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
  darkMode: 'class',
  content: [],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mogin: {
          primary: '#02586D',
          secondary: '#72C8D7',
          accent: '#F2DFA7',
          neutral: '#181a2a',
          'base-100': '#F2F2F2',
          info: '#9fccff',
          success: '#107a53',
          warning: '#f6c40e',
          error: '#8C0303',
        },
      },
    ],
  },
};
