import { forwardRef, ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps, focusWithin } from '../lib'

const Styles = cva({
  base: [
    'inline-flex-center trans-150 whitespace-nowrap rounded-md',
    focusWithin,
  ],
  variants: {
    color: {
      primary: 'bg-primary text-white hover:brightness-90',
      secondary: 'bg-secondary text-foreground',
      ghost: 'bg-transparent hover:bg-muted',
      outlined: 'border border-border hover:bg-muted',
      red: 'bg-red',
      orange: 'bg-orange',
      green: 'bg-green',
    },
    size: {
      sm: 'h-[36px] px-3 text-sm',
      md: 'h-[40px] px-3.5 text-base font-[475]',
      lg: 'h-[46px] px-5 text-md',
    },
    icon: {
      none: '',
      only: '',
      left: '',
      right: '',
    },
  },
  compoundVariants: [
    {
      icon: 'only',
      size: 'sm',
      class: 'size-[2rem] px-0',
    },
    {
      icon: 'only',
      size: 'md',
      class: 'p-0 size-[2.25rem] [&>svg]:size-[1.25rem]',
    },
    {
      icon: 'only',
      size: 'lg',
      class: 'size-[3rem] px-0',
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'md',
    icon: 'none',
  },
})

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  className?: string
  color?: VariantProps<typeof Styles>['color']
  size?: VariantProps<typeof Styles>['size']
  icon?: VariantProps<typeof Styles>['icon']
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, size, icon, ...props }, ref) => {
    return <button ref={ref} className={cx(Styles({ color, size, icon }), className)} {...props} />
  })
