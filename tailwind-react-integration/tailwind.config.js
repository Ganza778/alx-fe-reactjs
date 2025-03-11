// tailwind.config.js
module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", // Paths to your JS/JSX/TS/TSX files
    "./public/index.html",        // Include your HTML files
  ],
  darkMode: 'class', // Enable dark mode using a class
  theme: {
    extend: {
      // Custom theme extensions like colors, spacing, etc.
      colors: {
        customColor: '#1D4ED8', // Example custom color
      },
    },
  },
  variants: {
    extend: {
      // Customize or add new variants here (e.g., 'hover', 'focus', etc.)
      backgroundColor: ['active', 'group-hover'], // Add `active` and `group-hover` variants for background color
    },
  },
  plugins: [],
};
