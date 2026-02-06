import { defineConfig } from "eslint/config"
import { configs } from "eslint-plugin-perfectionist"

const sortObjectsExcludeConfig = defineConfig({
  files: ["*.json"],
  rules: { "perfectionist/sort-objects": "off" },
})

export function perfectionistConfig() {
  return defineConfig([
    configs["recommended-natural"],

    {
      rules: {
        // "perfectionist/sort-exports": "off",
        "perfectionist/sort-imports": "off",
        "perfectionist/sort-modules": "off",
      },
    },

    sortObjectsExcludeConfig,
  ])
}
