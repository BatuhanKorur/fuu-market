import type { StorybookConfig } from '@storybook/react-vite'
import { join, dirname } from 'path'

export function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  stories: [
    '../src/**/*.@(md|mdx)',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../packages/ui/src/components/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)',
  ],
  staticDirs: ['public'],
  managerHead: head => `
    ${head}
    <link rel="stylesheet" href="app.css"  />
  `,
  addons: [
    {
      name: getAbsolutePath('@storybook/addon-essentials'),
      options: {
        backgrounds: false,
      },
    },
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-storysource'),
    getAbsolutePath('storybook-dark-mode'),
  ],
  docs: {
    defaultName: 'Docs',
  },
  typescript: {
    check: false,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
    },
  },

}
export default config
