import { themes } from '@storybook/theming'

const common = {
  brandTitle: 'Fuu Market | Component Docs',
}

export const PreviewTheme = {
  dark: {
    ...themes.dark,
    ...common,
  },
  light: {
    ...themes.normal,
    ...common,
  },
}

export const PreviewTheming = {
  darkClass: ['dark'],
  lightClass: ['light'],
  classTarget: 'html',
  stylePreview: true,
  dark: PreviewTheme.dark,
  light: PreviewTheme.light,
}
