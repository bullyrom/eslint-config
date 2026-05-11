import { defineConfig } from "eslint/config"
import prettierConfigFlat from "eslint-config-prettier/flat"
import prettierPluginRecommended from "eslint-plugin-prettier/recommended"

export function prettierConfig() {
  return defineConfig([prettierConfigFlat, prettierPluginRecommended], {
    rules: {
      "prettier/prettier": [
        "error",
        {},
        {
          usePrettierrc: true,
        },
      ],
    },
  })
}
