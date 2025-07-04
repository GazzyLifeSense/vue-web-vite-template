import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/*
 * 项目引入eslint：pnpm create @eslint/config
 * 安装vscode插件：eslint(若未符合规则但没有提示，考虑切换eslint vscode插件版本)
 */
/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: [ "**/*.{js,mjs,cjs,ts,vue}" ] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: [ "**/*.vue" ], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "semi": "off",
      "object-curly-spacing": [ "error", "always" ],
      "array-bracket-spacing": "off",
      "no-duplicate-imports": "error"
    }
  }
];