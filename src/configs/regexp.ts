import { defineConfig } from "eslint/config"
import { configs } from "eslint-plugin-regexp"

export function regexpConfig() {
  return defineConfig([configs["flat/all"]])
}
