import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import * as Radix from '@radix-ui/react-tooltip'
import { cx, SlideIn, StateAnimationZoom } from '../../lib'

interface TooltipProps {
  /** Hello */
  tip: string
  delay?: number
  sideOffset?: number
  side?: 'top' | 'right' | 'bottom' | 'left'
}

/**
 * ## A component that displays a tooltip when its child element is hovered or focused. The tooltip provides additional information about the element.
 */
export const Tooltip = forwardRef<ElementRef<typeof Radix.Content>, ComponentPropsWithoutRef<typeof Radix.Content> & TooltipProps>(
  ({ className, tip, delay = 150, sideOffset = 4, side, ...props }, ref) => {
    return (
      <Radix.Provider>
        <Radix.Root delayDuration={delay}>
          <Radix.Trigger asChild>
            {props.children}
          </Radix.Trigger>
          <Radix.Content
            ref={ref}
            side={side}
            aria-label={tip}
            sideOffset={sideOffset}
            className={cx(
              'bg-popover border rounded-md shadow',
              'px-3 py-1.5 text-sm text-foreground',
              'z-[500] pointer-events-none',
              SlideIn,
              StateAnimationZoom,
              className,
            )}
            {...props}
          >
            {tip}
          </Radix.Content>
        </Radix.Root>
      </Radix.Provider>
    )
  })
