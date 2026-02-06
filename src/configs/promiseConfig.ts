import { defineConfig } from "eslint/config"
import promisePlugin from "eslint-plugin-promise"

export function promiseConfig() {
  return defineConfig([promisePlugin.configs["flat/recommended"]])
}
