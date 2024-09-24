import { forwardRef, ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps, FocusWithin } from '../lib'

export const ButtonVariants = {
  color: {
    primary: 'bg-primary text-white hover:brightness-90 active:brightness-100',
    secondary: 'bg-secondary text-foreground hover:brightness-90',
    ghost: 'bg-transparent hover:bg-muted/85 active:bg-muted/100',
    outlined: 'border border-border hover:bg-muted/75',
    red: 'bg-red',
    orange: 'bg-orange',
    green: 'bg-green',
  },
  size: {
    sm: 'h-8 text-sm px-3 font-[425]',
    md: 'h-10 text-base px-4 font-[450] tracking-[0.02em]',
    lg: 'h-12 text-md px-5 font-[475] tracking-[0.025em]',
  },
  icon: {
    none: '',
    only: '',
    left: '',
    right: '',
  },
}

const Styles = cva({
  base: [
    'inline-flex-center trans-250 whitespace-nowrap rounded-md',
    FocusWithin,
  ],
  variants: ButtonVariants,
  compoundVariants: [
    {
      icon: 'only',
      size: 'sm',
      class: 'p-0 size-7 [&>svg]:size-4',
    },
    {
      icon: 'only',
      size: 'md',
      class: 'p-0 size-9 [&>svg]:size-[1.25rem]',
    },
    {
      icon: 'only',
      size: 'lg',
      class: 'size-10 px-0',
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'md',
    icon: 'none',
  },
})

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  className?: string
  color?: VariantProps<typeof Styles>['color']
  size?: VariantProps<typeof Styles>['size']
  icon?: VariantProps<typeof Styles>['icon']
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, size, icon, ...props }, ref) => {
    return <button ref={ref} className={cx(Styles({ color, size, icon }), className)} {...props} />
  })
