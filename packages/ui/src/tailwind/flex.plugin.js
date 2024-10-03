// eslint-disable-next-line @typescript-eslint/no-require-imports
const flexPlugin = require('tailwindcss/plugin')

/**
 *
 * f-center-x
 * f-center-y
 * f-center
 *
 * fc-center-x
 * fc-center-y
 * fc-center
 *
 * f-full
 * fc-full
 */

const flexFull = (col = false, inline = false) => {
  return {
    display: inline ? 'inline-flex' : 'flex',
    flexDirection: col ? 'column' : 'row',
    width: '100%',
    height: '100%',
  }
}

module.exports = flexPlugin(function ({ addUtilities }) {
  addUtilities({
    '.flex-full': flexFull(),
    '.flex-col-full': flexFull(true),
    '.inline-flex-full': flexFull(false, true),
    '.inline-flex-col-full': flexFull(true, true),
    '.flex-align': {
      display: 'flex',
      alignItems: 'center',
    },
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
