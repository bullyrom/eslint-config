import type { Config } from "prettier"

export default {
  bracketSameLine: false,
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 79,
  semi: false,
  singleAttributePerLine: false,
  tabWidth: 2,
} as Config
