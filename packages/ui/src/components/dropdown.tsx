import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import * as radix from '@radix-ui/react-dropdown-menu'
import { cva, cx, FocusWithin } from '../lib'

const Styles = cva({
  variants: {
    base: {
      trigger: ['inline-flex', FocusWithin],
      content: [
        'z-50 bg-popover border rounded-md shadow-md',
        'min-w-[10rem] overflow-hidden p-1 text-popover-foreground shadow-md',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',
      ],
      item: [
        'flex items-center relative select-none outline-none',
        'px-2 py-2.5 text-sm text-foreground focus:text-primary-foreground',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      ],
      separator: '-mx-1 my-1 h-px bg-muted',
    },
  },
})

export const Dropdown = radix.Root

export const DropdownTrigger = forwardRef<ElementRef<typeof radix.Trigger>, ComponentPropsWithoutRef<typeof radix.Trigger>>(
  ({ ...props }, ref) => (
    <radix.Trigger ref={ref} className={Styles({ base: 'trigger' })} {...props} />
  ),
)

export const DropdownContent = forwardRef<
  ElementRef<typeof radix.Content>,
  ComponentPropsWithoutRef<typeof radix.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <radix.Portal>
    <radix.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cx(
        Styles({ base: 'content' }),
        className,
      )}
      {...props}
    />
  </radix.Portal>
))

export const DropdownItem = forwardRef<
  ElementRef<typeof radix.Item>,
  ComponentPropsWithoutRef<typeof radix.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <radix.Item
    ref={ref}
    className={cx(
      Styles({ base: 'item' }),
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))

export const DropdownSeparator = forwardRef<
  ElementRef<typeof radix.Separator>,
  ComponentPropsWithoutRef<typeof radix.Separator>
>(({ className, ...props }, ref) => (
  <radix.Separator
    ref={ref}
    className={cx(Styles({ base: 'separator' }), className)}
    {...props}
  />
))

export const DropdownLabel = forwardRef<
  ElementRef<typeof radix.Label>,
  ComponentPropsWithoutRef<typeof radix.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <radix.Label
    ref={ref}
    className={cx(inset && 'pl-8', className)}
    {...props}
  />
))
