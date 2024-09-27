import { ReactNode } from 'react'
import { cx, FormError } from '../../lib'
import { Label } from '../label/Label'

interface FormItemProps {
  children: ReactNode
  className?: string
  label?: string
  error?: FormError
  errorClassName?: string
}
export const FormItem = ({ children, className, label, error, errorClassName }: FormItemProps) => {
  return (
    <div>
      { label && <Label>{ label }</Label>}
      <div className={cx(
        '[&>input]:border-0 border rounded',
        error ? 'border-red-foreground/25' : 'border',
        className,
      )}
      >
        { children }
      </div>
      { error && (
        <span className={cx(
          'text-xs text-red-foreground',
          errorClassName,
        )}
        >
          { error.message as string }
        </span>
      ) }
    </div>
  )
}
