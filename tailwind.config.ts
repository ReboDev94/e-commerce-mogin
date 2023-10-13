import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
  darkMode: 'class',
  content: ['content/**/**.md'],
  daisyui: {
    themes: [
      {
        mogin: {
          primary: '#02586D',
          secondary: '#72C8D7',
          accent: '#F2DFA7',
          neutral: '#3d4451',
          'base-100': '#FFFFFF',
          info: '#9fccff',
          success: '#107a53',
          warning: '#f6c40e',
          error: '#8C0303',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
