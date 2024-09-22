// eslint-disable-next-line @typescript-eslint/no-require-imports
const flexPlugin = require('tailwindcss/plugin')

module.exports = flexPlugin(function ({ addUtilities }) {
  addUtilities({
    '.flex-center': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '.inline-flex-center': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '.flex-col-center': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '.flex-between': {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '.flex-center-between': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    '.flex-col-between': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    '.flex-col-center-between': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  })
})
