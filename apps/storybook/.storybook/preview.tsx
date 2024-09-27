import { type Preview } from '@storybook/react'
import { SBDocs, SBThemeConfigs, SBViewports } from '@sb/lib'
// import '../theme.scss'
// import './public/app.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
      disableSaveFromUI: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: SBThemeConfigs,
    docs: SBDocs,
    viewport: SBViewports,
  },
}

export default preview
