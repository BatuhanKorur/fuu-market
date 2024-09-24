import { ReactNode } from 'react'
import { FormError } from '../../lib'

interface FormFieldProps {
  children: ReactNode
  label?: string
  error?: FormError
}

export const FormField = ({ children, label, error }: FormFieldProps) => {
  return (
    <div className="flex flex-col">
      { label && <label>{ label }</label> }
      { children }
      { error && <span>{ error.message as string }</span> }
    </div>
  )
}
