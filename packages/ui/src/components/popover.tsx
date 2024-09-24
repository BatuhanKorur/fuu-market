import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import * as Radix from '@radix-ui/react-popover'
import { cx, StateOpenClose } from '../lib'

export const Popover = Radix.Popover

export const PopoverTrigger = Radix.PopoverTrigger

export const PopoverContent = forwardRef<
  ElementRef<typeof Radix.Content>,
  ComponentPropsWithoutRef<typeof Radix.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => {
  /**
   *
   * 'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none'
   */
  return (
    <Radix.Portal>
      <Radix.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cx(
          'z-50 border rounded-md shadow-sm outline-none',
          'min-w-64 bg-popover text-foreground p-4',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2',
          'data-[side=top]:slide-in-from-bottom-2',
          StateOpenClose,
          className,
        )}
        {...props}
      />
    </Radix.Portal>
  )
})
