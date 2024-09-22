import { forwardRef, ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from '../lib'

const Styles = cva({
  base: [
    'inline-flex items-center justify-center whitespace-nowrap rounded-md',
    'transition duration-150 ease-in-out',
  ],
  variants: {
    color: {
      primary: 'bg-primary text-foreground',
      secondary: 'bg-secondary text-foreground',
      ghost: 'bg-transparent hover:bg-muted',
      outlined: 'border border-border hover:bg-muted',
    },
    size: {
      sm: 'px-2.5 py-1.5 text-sm',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-2 text-base',
    },
    icon: {
      none: '',
      only: '',
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
