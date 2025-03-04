module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/jest-testing-library',
    'react-app',
    'prettier',
  ],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
  rules: {
    'react/jsx-wrap-multilines': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
}
