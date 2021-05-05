module.exports = {
  extends: "../common/.eslintrc.js",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./test/tsconfig.json",
  },
};
