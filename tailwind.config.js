/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        github_icon: "url('./src/assets/github.png')",
        linkedin_icon: "url('./src/assets/linkedin.png')",
        x_icon: "url('./src/assets/twitter.png')",
      },
      colors: {
        grad_blue: "#155e89",
      },
    },
  },
  plugins: [],
};
