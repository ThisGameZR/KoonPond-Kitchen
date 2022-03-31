module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layouts/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ab6363",
          500: "#701a1a",
          600: "#5f1a1a",
          1000: "#450000",
        },
        secondary: {
          50: "#ffebc7",
          100: "#ffd891",
          500: "#ffb938",
          1000: "#ffa703",
        },
        tertiary: {
          100: "#ffa959",
          500: "#f29135",
          700: "#ff8f26",
          1000: "#ff7b00",
        },
      },
    },
  },
  plugins: [],
};
