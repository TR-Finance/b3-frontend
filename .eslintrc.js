module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // Force components to be named and declared using arrow functions
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],

    // React 17+ doesn't need to import React to use JSX
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',

    // Using variables before they're defined is not a problem
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    // Some best practices slow down development and should be warnings instead of errors
    '@typescript-eslint/no-unused-vars': 'warn',
    'spaced-comment': 'warn',
    'prefer-template': 'warn',
    'arrow-body-style': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'no-multi-str': 'warn',

    // Flag prettier warnings in ESLint
    'prettier/prettier': 'warn',
  },
};
