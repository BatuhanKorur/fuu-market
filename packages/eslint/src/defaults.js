import eslint from '@eslint/js'
import tslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals';

export const defaults = [
  eslint.configs.recommended,
  ...tslint.configs.recommended,
  stylistic.configs['recommended-flat'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.node,
        document: 'readonly',
      },
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: 'module',
    },
  },
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/package-lock.json',
      '**/pnpm-lock.yaml',
      '**/output',
      '**/temp',
      '**/.temp',
      '**/.next',
      '**/.vercel',
      '**/.vscode',
      '**/.git',
      '**/.idea',
      '**/.cache',
      '**/.output',
      '**/*.min.*',
    ],
  },
]
