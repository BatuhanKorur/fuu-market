import { ReactNode } from 'react'
import { FormError, FormStyleContainer, cx } from '../../lib'
import { TextLabel } from '../text.tsx'

interface FormFieldProps {
  children: ReactNode
  className?: string
  label?: string
  error?: FormError
}

export const FormField = ({ children, className, label, error }: FormFieldProps) => {
  return (
    <div className={cx('flex flex-col', className)}>
      { label && <TextLabel>{ label }</TextLabel> }
      <div className={cx(FormStyleContainer)}>
        { children }
      </div>
      { error && <span>{ error.message as string }</span> }
    </div>
  )
}
