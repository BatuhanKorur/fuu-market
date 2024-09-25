import { forwardRef, ElementRef, ComponentPropsWithoutRef, type ReactNode } from 'react'
import { cva, cx } from '../lib'
import * as radix from '@radix-ui/react-tooltip'

const Styles = cva({
  variants: {
    base: {
      content: [
        'bg-popover border z-50 overflow-hidden rounded-md',
        'px-3 py-1.5 text-sm text-foreground shadow',
        'animate-in fade-in-0 zoom-in-100',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
        'data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',
      ],
    },
  },
})

export const Tooltip = forwardRef<
  ElementRef<typeof radix.Content>,
  ComponentPropsWithoutRef<typeof radix.Content> & {
    tip: string
    delay?: number
    sideOffset?: number
  }
>(({ delay = 300, sideOffset = 4, ...props }, ref) => {
  return (
    <radix.Provider>
      <radix.Root delayDuration={delay}>
        <radix.Trigger className="w-full" asChild>
          {props.children}
        </radix.Trigger>
        <radix.Content
          ref={ref}
          sideOffset={sideOffset}
          className={cx(
            Styles({ base: 'content' }),
            props.className,
          )}
          {...props}
        >
          {props.tip}
        </radix.Content>
      </radix.Root>
    </radix.Provider>
  )
})
