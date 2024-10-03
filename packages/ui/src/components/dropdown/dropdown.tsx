import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import * as Radix from '@radix-ui/react-dropdown-menu'
import { cx, FocusRingWithin, NoOutlines, SlideIn, StateAnimationZoom } from '../../lib'

export const Dropdown = Radix.Root

export const DropdownTrigger = forwardRef<ElementRef<typeof Radix.Trigger>, ComponentPropsWithoutRef<typeof Radix.Trigger>>(
  ({ className, ...props }, ref) => (
    <Radix.Trigger
      ref={ref}
      className={cx(
        'inlineFlex',
        FocusRingWithin,
        className,
      )}
      {...props}
    />
  ),
)

export const DropdownContent = forwardRef<ElementRef<typeof Radix.Content>, ComponentPropsWithoutRef<typeof Radix.Content>>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <Radix.Portal>
      <Radix.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cx(
          'z-50 bg-popover border rounded-md shadow-md',
          'min-w-[10rem] overflow-hidden p-1 text-popover-foreground shadow-md',
          StateAnimationZoom,
          SlideIn,
          className,
        )}
        {...props}
      />
    </Radix.Portal>
  ))

export const DropdownItem = forwardRef<
  ElementRef<typeof Radix.Item>,
  ComponentPropsWithoutRef<typeof Radix.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <Radix.Item
    ref={ref}
    className={cx(
      'relative flex items-center select-none',
      'px-2 py-2.5 text-sm text-foreground focus:text-primary-foreground',
      inset && 'pl-8',
      NoOutlines,
      className,
    )}
    {...props}
  />
))

export const DropdownSeparator = forwardRef<ElementRef<typeof Radix.Separator>, ComponentPropsWithoutRef<typeof Radix.Separator>>(
  ({ className, ...props }, ref) => (
    <Radix.Separator
      ref={ref}
      className={cx(
        '-mx-1 my-1 h-px bg-muted',
        className,
      )}
      {...props}
    />
  ))

export const DropdownLabel = forwardRef<ElementRef<typeof Radix.Label>, ComponentPropsWithoutRef<typeof Radix.Label> & {
  inset?: boolean
}>((
  { className, inset, ...props }, ref) => (
  <Radix.Label
    ref={ref}
    className={cx(
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))
