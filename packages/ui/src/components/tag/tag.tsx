import { forwardRef, ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from '../../lib'

export const TagVariants = {
  color: {
    primary: 'bg-primary-background text-primary-foreground',
    secondary: 'bg-secondary-background text-secondary-foreground',
    red: 'bg-red-background text-red-foreground',
    orange: 'bg-orange-background text-orange-foreground',
    green: 'bg-green-background text-green-foreground',
  },
  size: {
    sm: 'h-5 text-2xs px-2',
    md: 'h-6 text-2xs px-2.5',
    lg: 'h-7 text-xs px-3',
  },
}

const Styles = cva({
  base: [
    'inline-flex-center rounded-md',
  ],
  variants: TagVariants,
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})

interface TagProps extends ComponentPropsWithRef<'div'> {
  className?: string
  color?: VariantProps<typeof Styles>['color']
  size?: VariantProps<typeof Styles>['size']
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(({ className, color, size, ...props }, ref) => {
  return (
    <div className={cx(Styles({ color, size }), className)} ref={ref} {...props}>
      <p>Tag</p>
    </div>
  )
})
