/**
 * @typedef { import("eslint").Linter.Config } EsLintConfig
 */

const typescriptRules = {
  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/no-empty-interface': 'off',
  '@typescript-eslint/ban-types': 'off',
  '@typescript-eslint/ban-ts-comment': 'off'
};

/** @type {EsLintConfig} */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    ...typescriptRules
  }
};
