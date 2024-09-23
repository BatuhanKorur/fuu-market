import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { cva, cx, type VariantProps } from '../lib'

export const AvatarVariants = {
  size: {
    sm: 'size-5',
    md: 'size-7',
    lg: 'size-9',
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
  src: string
  alt?: string
  size?: VariantProps<typeof Styles>['size']
  type?: VariantProps<typeof Styles>['type']
  className?: string
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, size, type, className, ...props }, ref) => {
    return (
      <div className={cx(Styles({ size, type }), className)} ref={ref} {...props}>
        <img
          src={src}
          alt={alt || src}
        />
      </div>
    )
  },
)
