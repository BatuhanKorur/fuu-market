import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import * as Radix from '@radix-ui/react-popover'
import { cx, SlideIn, StateAnimationZoom } from '../../lib'

export const Popover = Radix.Popover

export const PopoverTrigger = Radix.PopoverTrigger

export const PopoverContent = forwardRef<ElementRef<typeof Radix.Content>, ComponentPropsWithoutRef<typeof Radix.Content>>(
  ({ className, align = 'center', sideOffset = 4, ...props }, ref) => {
    return (
      <Radix.Portal>
        <Radix.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={cx(
            'z-50 border rounded-md shadow-sm outline-none',
            'min-w-64 bg-popover text-foreground p-4',
            SlideIn,
            StateAnimationZoom,
            className,
          )}
          {...props}
        />
      </Radix.Portal>
    )
  })
