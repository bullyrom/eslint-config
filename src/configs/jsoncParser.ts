import { defineConfig } from "eslint/config"
// import jsoncParser from "jsonc-eslint-parser"

export function jsoncParserConfig() {
  return defineConfig([
    // {
    //   files: ["**/*.json", "**/*.json5"],
    //   languageOptions: {
    //     parser: jsoncParser,
    //   },
    // },
  ])
}
