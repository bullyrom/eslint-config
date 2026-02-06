import { defineConfig } from "eslint/config"

import { cheConfig } from "./src/index"

export default defineConfig([
  ...cheConfig(),
  {
    rules: {
      "import/no-internal-modules": "off",
    },
  },
])
