import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cx } from '../lib'

interface CardProps {
  children: ReactNode
  className?: string
  title?: string
  description?: string
  contentClass?: string
}
export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & CardProps>(
  ({ children, className, title, description, contentClass }, ref) => {
    const padding = 'px-4 py-3.5'
    return (
      <div ref={ref} className={`rounded-md border bg-card text-card-foreground shadow ${className}`}>
        {title && (
          <div ref={ref} className={cx(padding, 'border-b')}>
            <h2 className="text-md font-[475] tracking-[0.1px] text-card-foreground -mb-px">{title}</h2>
            {description && <p className="text-sm text-card-foreground/60">{description}</p>}
          </div>
        )}
        <div className={cx(padding, contentClass)}>
          {children}
        </div>
      </div>
    )
  })
