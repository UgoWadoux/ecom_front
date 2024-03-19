/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [daisyui],
  theme:{
    extend:{
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
      }
    }
  }
};
