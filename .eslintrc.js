module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.tsx',
        ],
      },
    ],
    'import/no-unresolved': 0,
    'no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
  },
};
