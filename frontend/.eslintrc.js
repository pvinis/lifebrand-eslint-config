module.exports = {
  extends: ["../common/.eslintrc.js", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/extensions": "off",
    "react/display-name": "off",
    "react/prop-types": 0, // "off" does not work
    "no-nested-ternary": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
