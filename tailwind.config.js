module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
        center: true,
        padding: "1rem",
        screens: {
            lg: "1124px",
            xl: "1124px",
            "2xl": "1124px"
        }
    },
    fontFamily: {
        Montserrat: ["Montserrat, sans-serif"],
        Poppins: ["Poppins, sans-serif"]
    },
    container: {
        center: true,
        padding: "1rem",
        screens: {
            lg: "1124px",
            xl: "1124px",
            "2xl": "1124px"
        }
    },
    extend: {
        colors: {
            "theme-birumuda": "#ecf5ff",
            "theme-birutua": "#004a99",
            "theme-biru": "#007bff",
            "theme-putih": "#ecf5ff",
            "theme-hitam": "#283d50",
        }
    },
},
  plugins: [],
}