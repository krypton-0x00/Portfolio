/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        //custom fonts
        poetsen: ["Poetsen One", "sans-serif"],
        ubuntu: ["Ubuntu Sans ", "sans-serif"],
        jaro: ["Jaro", "sans-serif"],
        archivo: ["Archivo Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
