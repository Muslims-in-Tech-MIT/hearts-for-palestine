import type { Config } from "tailwindcss";

const generateColorClass = (colorName: string) => {
  return {
    [`${colorName}-lighter`]: `var(--${colorName}-lighter)`,
    [`${colorName}-light`]: `var(--${colorName}-light)`,
    [`${colorName}`]: `var(--${colorName})`,
    [`${colorName}-dark`]: `var(--${colorName}-dark)`,
    [`${colorName}-darker`]: `var(--${colorName}-darker)`,
  };
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...generateColorClass("primary"),
        ...generateColorClass("secondary"),
        ...generateColorClass("accent-main"),
        ...generateColorClass("accent-secondary"),
        ...generateColorClass("accent-tertiary"),
      },
    },
  },
  plugins: [],
};

export default config;
