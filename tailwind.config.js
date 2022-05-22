module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f7b731",
          secondary: "#3867d6",
          accent: "#202325",
          neutral: "#222f3e",
          red: "#eb3b5a",
          purple: "#8854d0",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
