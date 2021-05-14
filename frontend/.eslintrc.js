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
    "import/prefer-default-export": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": ["error", { "functions": true, "classes": true }],
    "@typescript-eslint/no-explicit-any": "warn",
    "class-methods-use-this": "off",
    "import/no-extraneous-dependencies": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
