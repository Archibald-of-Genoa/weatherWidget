import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { colors } from "./app/ui/colors";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        ...colors,
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      backgroundImage: {
        "body-gradient": "linear-gradient(to bottom, #6F7F8A, #BCC8C4)",
      },
    },
  },
  plugins: [],
};
export default config;
