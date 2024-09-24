import { type Icon } from '@phosphor-icons/react'
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export { type Icon }

export interface LinkItem {
  to: string
  label: string
  Icon: Icon
}
