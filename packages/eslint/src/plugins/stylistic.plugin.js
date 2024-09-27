import stylistic from '@stylistic/eslint-plugin'

export const stylisticPlugin = {
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/array-element-newline': ['error', 'consistent'],
  },
}
