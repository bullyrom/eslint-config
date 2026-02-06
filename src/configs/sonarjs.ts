import { defineConfig } from "eslint/config"
import { configs } from "eslint-plugin-sonarjs"

export function sonarjsConfig() {
  return defineConfig([
    configs.recommended,
    {
      rules: {
        "sonarjs/no-commented-code": "off",
        "sonarjs/todo-tag": "off",
      },
    },
  ])
}
