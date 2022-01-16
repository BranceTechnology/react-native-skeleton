module.exports = {
  root: true,
  env: {
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'unused-imports', 'react', 'prettier'],
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],

  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  }
}
