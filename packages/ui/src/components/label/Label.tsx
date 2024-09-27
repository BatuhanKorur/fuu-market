import { ComponentProps, ReactNode } from 'react'
import { cva, cx } from '../../lib'

interface LabelProps extends ComponentProps<'span'> {
  /** Custom class to override default styles */
  className?: string
  /** Returns a `<label>` tag instead of span */
  htmlFor?: string
  /** Renders string with `<span>` tag */
  children: ReactNode
}

const ui = cva({
  base: 'text-xs pb-0.5 font-[450] text-muted-foreground tracking-[0.1px]',
})

/**
 * ## A functional component that renders either a label element or a span element.
 */
export const Label = ({ className, htmlFor, children }: LabelProps) => {
  if (htmlFor) {
    return (
      <label htmlFor={htmlFor} className={cx(ui(), className)}>
        {children}
      </label>
    )
  }
  return (
    <span className={cx(ui(), className)}>
      {children}
    </span>
  )
}
