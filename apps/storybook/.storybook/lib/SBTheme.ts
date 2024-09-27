import { themes } from '@storybook/theming'
const common = {
  brandImage: 'http://localhost:6006/logo-sb.png',
}

export const SBTheme = {
  dark: {
    ...themes.dark,
    ...common,
  },
  light: {
    ...themes.light,
    ...common,
  },
}

export const SBThemeConfigs = {
  darkClass: ['dark'],
  lightClass: ['light'],
  classTarget: 'html',
  stylePreview: true,
  dark: SBTheme.dark,
  light: SBTheme.light,
}
