export const typescriptPlugin = {
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      varsIgnorePattern: 'schema',
    }],
  },
}
