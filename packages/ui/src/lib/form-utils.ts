import { InputHTMLAttributes } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export type FormInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: 'sm' | 'md' | 'lg'
}

export type FormError = FieldError | Merge<FieldError, FieldErrorsImpl>

export const FormInputVariants = {
  base: 'bg-transparent text-foreground flex items-center w-full border rounded',
  variants: {
    size: {
      sm: 'h-8 text-sm',
      md: 'h-10 text-base px-3',
      lg: 'h-12 text-lg',
    },
  },
  defaultVariants: {
    size: 'md' as const,
  },
}
