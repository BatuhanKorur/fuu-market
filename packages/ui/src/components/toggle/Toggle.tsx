import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import * as Radix from '@radix-ui/react-toggle'
import { cva, cx } from '../../lib'
import { VariantProps } from 'cva'

export const Styles = {
  variants: {
    variant: {
      default: 'bg-transparent',
      outline:
        'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      sm: 'h-9 px-2.5',
      default: 'h-10 px-3',
      lg: 'h-11 px-5',
    },
  },
  defaultValues: {
    variant: 'default' as const,
    size: 'default' as const,
  },
}

const ui = cva({
  base: [
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
  ],
  ...Styles,
})

interface ToggleProps extends ComponentPropsWithoutRef<typeof Radix.Root> {
  /** Custom class to override default styles */
  className?: string
  /** Variant of the toggle */
  variant?: VariantProps<typeof ui>['variant']
  /** Size of the toggle */
  size?: VariantProps<typeof ui>['size']
}
export const Toggle = forwardRef<ElementRef<typeof Radix.Root>, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <Radix.Root
      ref={ref}
      className={cx(ui({ variant, size }), className)}
      {...props}
    />
  ))
