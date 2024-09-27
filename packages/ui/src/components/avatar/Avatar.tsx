import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { cva, cx, type VariantProps } from '../../lib'

export const AvatarStyles = {
  base: 'inline-flex [&>img]:inline-flex [&>img]:object-cover',
  variants: {
    size: {
      sm: 'size-5',
      md: 'size-7',
      lg: 'size-9',
    },
    type: {
      rounded: '[&>img]:rounded-full',
      square: '[&>img]:rounded-md',
    },
  },
  defaultVariants: {
    size: 'md' as const,
    type: 'square' as const,
  },
}

const ui = cva(AvatarStyles)

/**
 * Avatar Props
 */
interface AvatarProps extends ComponentPropsWithoutRef<'img'> {
  /** The source URL of the avatar image. */
  src: string
  /** Image alt text */
  alt?: string
  /** Additional classes */
  className?: string
  /** Avatar size */
  size?: VariantProps<typeof ui>['size']
  /** Avatar type */
  type?: VariantProps<typeof ui>['type']
}

/**
 * Avatar component rendered within a `div` container. This component can take various properties to customize
 * its appearance and behavior including `src`, `alt`, `size`, `type`, and `className`.
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, size, type, className, ...props }, ref) => {
    return (
      <div
        className={cx(
          ui({ size, type }),
          className,
        )}
        ref={ref}
        {...props}
      >
        <img
          src={src}
          alt={alt || src}
        />
      </div>
    )
  },
)
