/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    screens: {
      xs: "300px",  //360px
      sm: "640px",
      md: "768px",
      // lg: "1024px",
      lg: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: "#3F5BF6",

      white: "#fff",

      black: "#000",

      RED: {
        _100: "#F36F56"
      },

      GRAY: {
        _100: "#101828",
        _200: "#475467",
        _300: "#EAECF0",
        _400: "#101828",
        _500: "#475467",
        _600: "#344054",
        _700: "#D0D5DD",
        _800: "#272727"
      },

      MODAL_BACKGROUND: "rgba(11, 12, 14, 0.77)",

    }
  },
  plugins: [],
}

