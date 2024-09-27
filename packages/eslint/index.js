// Base eslint configurations
import { defaults } from './src/defaults.js'

// Plugins and rules
import { reactPlugin } from './src/plugins/react.plugin.js'
import { typescriptPlugin } from './src/plugins/typescript.plugin.js'
import { stylisticPlugin } from './src/plugins/stylistic.plugin.js'
import { unicornPlugin } from './src/plugins/unicorn.plugin.js'

export default [
  ...defaults,
  reactPlugin,
  typescriptPlugin,
  stylisticPlugin,
  unicornPlugin,
]
