import { forwardRef } from 'react'
import { cva, cx, type FormInput, FormInputVariants, FocusVisible } from '../../lib'

const ui = cva(FormInputVariants)
export const Input = forwardRef<HTMLInputElement, FormInput>(
  ({ className, size, ...props }, ref) => {
    return (
      <input
        className={cx(
          ui({ size }),
          FocusVisible,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  })
