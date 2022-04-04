/* eslint-disable global-require */
module.exports = {
  env: {
    es6: true,
    browser: false,
    commonjs: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'airbnb'],
  globals: {
    strapi: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'consistent-return': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'comma-dangle': ['error', 'never'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
