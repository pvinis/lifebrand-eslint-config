module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  ignorePatterns: ["node_modules/*", "/tests/**"],
  plugins: ["@typescript-eslint"],
  rules: {
    "arrow-body-style": "off", // allow arrow + return to reduce git changes in case of updates
    "@typescript-eslint/ban-ts-comment": "off", // Allow @ts-ignore
    "@typescript-eslint/ban-ts-ignore": "off", // Allow @ts-ignore
    "no-console": ["error", { allow: ["warn", "error"] }], // console.logs should be avoided, only allowing in certain cases error and warn
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/indent": "off", // no need for indenting
    "@typescript-eslint/explicit-function-return-type": "off", // Allow implicit function return types
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: true, classes: true },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "import/no-extraneous-dependencies": "error", // there is an easy fix in package.json bundledDependencies
  },
};
