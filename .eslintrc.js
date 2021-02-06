module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true
      }
   },
   settings: {
      react: {
         version: 'detect'
      }
   },
   env: {
      browser: true,
      amd: true,
      node: true,
      jest: true
   },
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended' // Make sure this is always the last element in the array.
   ],
   rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'react/prop-types': 0,
      'jsx-a11y/no-autofocus': 0,
      'no-var': 'error',
      // 'no-use-before-define': 'error',
      'no-undef': 'error',
      // '@typescript-eslint/no-use-before-define': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error']
   }
};
