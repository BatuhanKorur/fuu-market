import { cva, cx } from './cva'
import { VariantProps } from 'cva'
import { InputHTMLAttributes } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export type HTMLInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>
export type FormError = FieldError | Merge<FieldError, FieldErrorsImpl>

export interface FormInputProps extends HTMLInput {
  size?: VariantProps<typeof FormStyles>['size']
  styled?: VariantProps<typeof FormStyles>['styled']
}

export const FormStyleContainer = cx('border rounded')

export const FormStyleVariants = {
  size: {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base px-3',
    lg: 'h-12 text-lg',
  },
  styled: {
    default: FormStyleContainer,
    none: '',
  },
}

export const FormStyles = cva({
  base: 'bg-transparent text-foreground flex items-center',
  variants: FormStyleVariants,
  defaultVariants: {
    size: 'md',
    styled: 'default',
  },
})
