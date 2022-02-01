module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          DEFAULT: "#131921",
        },
        amazon_primary: {
          black: "#000",
          white: "#fff",
        },
        amazon_yellow: "#fbbf24",
        blue_light: "#232F3E",
        blue_medium: "#37475A",
        gray_medium: "#ccc",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
