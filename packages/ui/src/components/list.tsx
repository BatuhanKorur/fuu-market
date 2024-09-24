import { ComponentPropsWithoutRef } from 'react'
import { cx } from '../lib'

export const List = ({ children, separator = true, ...props }: ComponentPropsWithoutRef<'div'> & {
  separator?: boolean
}) => {
  return (
    <div className={cx(separator ? 'divide-y' : '')} {...props}>
      {children}
    </div>
  )
}

export const ListItem = ({ children, label, ...props }: ComponentPropsWithoutRef<'div'> & {
  label: string
}) => {
  return (
    <div className="text-base flex-between px-3.5 py-3" {...props}>
      <p className="font-[450] opacity-90">{label}</p>
      <div>{children}</div>
    </div>
  )
}
