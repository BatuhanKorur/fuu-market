import * as radix from '@radix-ui/react-avatar'
import { ComponentPropsWithoutRef, forwardRef, ElementRef } from 'react'

interface AvatarProps extends ComponentPropsWithoutRef<typeof radix.Root> {
  square?: boolean
}

export const Avatar = forwardRef<ElementRef<typeof radix.Root>, AvatarProps>(
  ({ square, ...props }, ref) => {
    return <radix.Root {...props} ref={ref} />
  })
