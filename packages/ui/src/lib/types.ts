import {
  ForwardRefExoticComponent,
  RefAttributes,
  ComponentPropsWithoutRef,
  ElementType,
  ElementRef,
  InputHTMLAttributes,
} from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export type { VariantProps } from 'cva'

export type FormError = FieldError | Merge<FieldError, FieldErrorsImpl>

export type FormInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: 'sm' | 'md' | 'lg'
}

export type FR<T extends ElementType, P = object> = ForwardRefExoticComponent<ComponentPropsWithoutRef<T> & RefAttributes<ElementRef<T>> & P>
