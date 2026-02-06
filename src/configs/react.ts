import { defineConfig } from "eslint/config"
import reactPlugin from "eslint-plugin-react"

export function reactConfig() {
  return defineConfig([
    reactPlugin.configs.flat.all || [],
    reactPlugin.configs.flat["jsx-runtime"] || [],
    {
      rules: {
        "react/jsx-filename-extension": [
          1,
          { extensions: [".js", ".jsx", ".ts", ".tsx", "vue"] },
        ],
        "react/jsx-first-prop-new-line": "warn",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-max-props-per-line": "off",
        "react/jsx-one-expression-per-line": "off",
        // # Change level.
        // Order
        "react/jsx-sort-props": "warn",
        // Conflict with prettier
        // "react/jsx-indent": [2, 2],
        "react/no-unknown-property": ["error", { ignore: ["class"] }],
      },
    },
  ])
}
