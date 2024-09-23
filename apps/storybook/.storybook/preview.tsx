import '../theme.css'
import { type Preview } from '@storybook/react'
import { PreviewDocs, PreviewTheming } from '@sb/lib'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: PreviewTheming,
    docs: PreviewDocs,
  },
}

export default preview
