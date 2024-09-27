// eslint-disable-next-line @typescript-eslint/no-require-imports
const transitionPlugin = require('tailwindcss/plugin')

module.exports = transitionPlugin(function ({ addUtilities }) {
  addUtilities({
    '.trans-100': {
      transitionProperty: 'all',
      transitionDuration: '100ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.trans-150': {
      transitionProperty: 'all',
      transitionDuration: '150ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.trans-200': {
      transitionProperty: 'all',
      transitionDuration: '200ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.trans-250': {
      transitionProperty: 'all',
      transitionDuration: '250ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '.trans-300': {
      transitionProperty: 'all',
      transitionDuration: '100ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  })
})
