import { forwardRef, ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps, FocusRingWithin } from '../../lib'

export const ButtonStyles = {
  base: [
    'inline-flex-center trans-250 whitespace-nowrap rounded-md font-[430] leading-none',
    'disabled:cursor-not-allowed disabled:opacity-80',
    FocusRingWithin,
  ],
  variants: {
    color: {
      outlined: 'border border-border hover:bg-muted/75',
      ghost: 'bg-transparent hover:bg-muted/85 active:bg-muted/100',
      primary: 'bg-primary text-white hover:brightness-90 active:brightness-100',
      secondary: 'bg-secondary text-foreground hover:brightness-90',
      red: 'bg-red',
      orange: 'bg-orange',
      green: 'bg-green',
    },
    size: {
      sm: 'h-8 text-[0.8rem] px-3',
      md: 'h-10 text-[0.85rem] px-4',
      lg: 'h-12 text-[0.9rem] px-5',
    },
    icon: {
      none: '',
      only: '',
      left: '',
      right: '',
    },
  },
  defaultVariants: {
    color: 'primary' as const,
    size: 'md' as const,
    icon: 'none' as const,
  },
  compoundVariants: [
    {
      icon: 'only' as const,
      size: 'sm' as const,
      class: 'p-0 size-8 [&>svg]:size-4',
    },
    {
      icon: 'only' as const,
      size: 'md' as const,
      class: 'p-0 size-10 [&>svg]:size-[1.25rem]',
    },
    {
      icon: 'only' as const,
      size: 'lg' as const,
      class: 'size-12 px-0',
    },
  ],
}

const ui = cva(ButtonStyles)

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  className?: string
  label?: string
  color?: VariantProps<typeof ui>['color']
  size?: VariantProps<typeof ui>['size']
  icon?: VariantProps<typeof ui>['icon']
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, size, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cx(
          ui({ color, size, icon }),
          className,
        )}
        {...props}
        style={{
          lineHeight: 0,
        }}
      >
      </button>
    )
  })
