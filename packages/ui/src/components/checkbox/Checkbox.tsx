import { cx, cva, type VariantProps } from '../../lib'
import { forwardRef, InputHTMLAttributes } from 'react'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: VariantProps<typeof ui>['size']
}

const CheckboxVariants = {
  base: [
    'bg-red',
    'checked:bg-blue-600',
  ],
  variants: {
    size: {
      sm: 'sized-3',
      md: 'size-3.5 rounded-[1px]',
      lg: 'size-4',
    },
  },
  defaultVariants: {
    size: 'md' as const,
  },
}

const ui = cva(CheckboxVariants)
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((
  { className, size, ...props }, ref) => {
  return (
    <div className={cx(
      'grid grid-cols-[1em,auto] gap-0.5',
    )}
    >
      <input
        type="checkbox"
        className={cx(
          ui({ size }),
          '::before:bg-red-600',
          className)}
        style={{
          backgroundColor: 'red',
        }}
        ref={ref}
        {...props}
      />
      <label>Hello</label>
    </div>
  )
})
