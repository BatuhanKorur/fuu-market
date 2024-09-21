// Base eslint configurations
import { defaults } from './src/defaults.js'
import { style } from './src/style.js'

// Plugins and rules
import { reactPlugin } from "./plugins/react.plugin.js";
import { typescriptPlugin } from "./plugins/typescript.plugin.js";

export default [
  ...defaults,
  style,
  reactPlugin,
  typescriptPlugin
]