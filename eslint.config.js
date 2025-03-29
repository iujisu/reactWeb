import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"],
    parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: { // 이 코드 추가!
			jsx: true,
		},
		sourceType: 'module',
		project: './tsconfig.eslint.json',
},
 rules: {"react-/prop-types":"off","react/react-in-jsx-scope":"off"} },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js },extends: ["js/recommended"] },
  pluginReact.configs.flat.recommended,
]);