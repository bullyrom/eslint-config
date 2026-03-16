import { defineConfig } from "eslint/config"
import { configs } from "eslint-plugin-package-json"

export function packageJsonConfig() {
  return defineConfig([configs["recommended-publishable"], configs.stylistic])
}
