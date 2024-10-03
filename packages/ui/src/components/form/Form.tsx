import { ReactNode } from 'react'
import { cx, FormError } from '../../lib'
import { Label } from '../label/Label'

const Form = {
  Root: ({ children }: { children: ReactNode }) => <div>{ children }</div>,
  Label: ({ label }: { label: string }) => <Label>{ label }</Label>,
  Content: ({ children, className, error }: { children: ReactNode, className: string, error: boolean }) => (
    <div className={cx(
      '[&>input]:border-0 [&>div>input]:border-0 border rounded',
      error ? 'border-red-foreground/25' : 'border',
      className,
    )}
    >
      { children }
    </div>
  ),
  Error: ({ error }: { error: FormError }) => (
    <span className="text-xs text-red-foreground">{ error.message as string }</span>
  ),
}

interface FormItemProps {
  children: ReactNode
  className?: string
  label?: string
  error?: FormError
}

export const FormItem = ({ children, className, label, error }: FormItemProps) => {
  return (
    <Form.Root>
      { label && <Form.Label label={label} /> }
      <Form.Content className={cx(className)} error={!!error}>
        { children }
      </Form.Content>
      { error && <Form.Error error={error} /> }
    </Form.Root>
  )
}
