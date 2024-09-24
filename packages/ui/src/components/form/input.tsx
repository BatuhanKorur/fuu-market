import { forwardRef } from 'react'
import { cx, FormInputProps, FormStyles } from '../../lib'

export const Input = forwardRef<HTMLInputElement, FormInputProps>((
  { className, size, styled, ...props }, ref) => {
  return (
    <input
      className={cx(
        FormStyles({ size, styled }),
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

export const InputPassword = () => {
  return (
    <div>
      <p>Form Input Password</p>
    </div>
  )
}

export const InputMoney = () => {
  return (
    <div>
      <p>Form Input Money</p>
    </div>
  )
}
