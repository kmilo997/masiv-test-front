module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'prettier/prettier': 'off',
    'max-len': [0],
    'import/no-unresolved': 'off',
    'no-unused-expressions': ['error', { 'allowTernary': true }],
    'no-param-reassign': 0,
    'quote-props': ['error', 'consistent'],
  },
};
