/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fc5c65",
        secondary: "#4ecdc4",
        black: "#000",
        white: "#fff",
        medium: "#6e6969",
        light: "#f8f4f4",
        dark: "#0c0c0c",
        danger: "#ff5252",
      },
    },
  },
  plugins: [],
};
