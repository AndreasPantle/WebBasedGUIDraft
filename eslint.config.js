import js from "@eslint/js";
import css from "@eslint/css";
import json from "eslint-plugin-json";
import pluginVue from "eslint-plugin-vue";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import globals from "globals";

export default [
  js.configs.recommended,
  json.configs.recommended,
  css.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  skipFormatting,
  {
    name: "app/files-to-lint",
    files: ["**/*.{vue}", "**/*.js", "**/*.json", "**/*.css"],
  },
  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },
  {
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
      semi: "error",
    },
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
];
