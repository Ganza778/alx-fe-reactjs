// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // This includes all JS, JSX, TS, and TSX files in the src folder
    "./public/index.html",         // This includes the HTML files in the public folder
  ],
  darkMode: false,  // Optional: Set to 'media' or 'class' if you need dark mode support
  theme: {
    extend: {},
  },
  plugins: [],
};
