import browserGlobals from "./browserGlobals.js";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

const jsConfig = pluginJs.configs.recommended;
const reactConfig = {
  ...pluginReact.configs.flat.recommended,
  settings: {
    react: {
      version: '18.3.1',
    },
  },
};

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: browserGlobals } },
  jsConfig,
  reactConfig,
  {
    rules: { 
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
