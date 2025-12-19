import antfu from "@antfu/eslint-config";
import globals from "globals";

export default antfu(
  {
    stylistic: false,
    typescript: true,
    vue: true,
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.worker,
        ...globals.webextensions,
      },
    },
  },
  {
    ignores: [
      "node_modules",
      "dist",
      "**/*.js",
      "**/*.d.ts",
      "public",
      "build",
      "coverage",
      "tests",
      "cypress",
      "src/types/**/*",
      "eslint.config.mjs",
    ],
  },
  {
    rules: {
      "no-alert": "warn",
      "no-console": "warn",
      "no-restricted-globals": "warn",
      "import/order": "off",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "vue/multi-word-component-names": "warn",
      "@eslint-community/eslint-comments/no-unlimited-disable": "off",
      "ts/explicit-function-return-type": "off",
      "perfectionist/sort-imports": [
        "warn",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,

          // import type の位置
          newlinesBetween: "always",

          // グループ定義は最小限
          groups: [
            "type",
            ["builtin", "external"],
            "internal",
            ["parent", "sibling", "index"],
            "object",
          ],
        },
      ],
    },
  },
);
