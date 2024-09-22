import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { cva, cx, type VariantProps } from '../lib'

export const AvatarVariants = {
  size: {
    sm: 'size-6',
    md: 'size-8',
    lg: 'size-10',
  },
  type: {
    rounded: '[&>img]:rounded-full',
    square: '[&>img]:rounded-md',
  },
}

const Styles = cva({
  base: [
    'inline-flex [&>img]:inline-flex [&>img]:object-cover',
  ],
  variants: AvatarVariants,
  defaultVariants: {
    size: 'md',
    type: 'rounded',
  },
})

interface AvatarProps extends ComponentPropsWithoutRef<'img'> {
  className?: string
  size?: VariantProps<typeof Styles>['size']
  type?: VariantProps<typeof Styles>['type']
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, type, ...props }, ref) => {
    return (
      <div className={cx(Styles({ size, type }), className)} ref={ref} {...props}>
        <img
          src="https://avatars.githubusercontent.com/u/3055951?v=4"
          alt="avatar"
        />
      </div>
    )
  },
)
