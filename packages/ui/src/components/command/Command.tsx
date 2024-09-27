import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { Command as CMD } from 'cmdk'
import { cx } from '../../lib'
import { MagnifyingGlass } from '@phosphor-icons/react'
export const Command = forwardRef<ElementRef<typeof CMD>, ComponentPropsWithoutRef<typeof CMD>>
(({ className, ...props }, ref) => (
  <CMD
    ref={ref}
    className={cx(
      'flex flex-col size-full overflow-hidden rounded-md bg-popover text-foreground',
      className,
    )}
    {...props}
  />
))

export const CommandInput = forwardRef<ElementRef<typeof CMD.Input>, ComponentPropsWithoutRef<typeof CMD.Input>>
(({ className, ...props }, ref) => (
  <div className="flex items-center border-b pl-2.5 group" cmdk-input-wrapper="">
    <MagnifyingGlass size={16.5} weight="light" className="mr-1.5 shrink-0 text-foreground/50 group-focus:text-foreground/100" />
    <CMD.Input
      ref={ref}
      className={cx(
        'flex w-full bg-transparent outline-none',
        'h-10 text-sm placeholder:text-foreground/60',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  </div>
))

export const CommandList = forwardRef<ElementRef<typeof CMD.List>, ComponentPropsWithoutRef<typeof CMD.List>
>(({ className, ...props }, ref) => (
  <CMD.List
    ref={ref}
    className={cx('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
))

export const CommandEmpty = forwardRef<ElementRef<typeof CMD.Empty>, ComponentPropsWithoutRef<typeof CMD.Empty>
>((props, ref) => (
  <CMD.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

export const CommandGroup = forwardRef<ElementRef<typeof CMD.Group>, ComponentPropsWithoutRef<typeof CMD.Group>
>(({ className, ...props }, ref) => (
  <CMD.Group
    ref={ref}
    className={cx(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      className,
    )}
    {...props}
  />
))

export const CommandSeparator = forwardRef<ElementRef<typeof CMD.Separator>, ComponentPropsWithoutRef<typeof CMD.Separator>
>(({ className, ...props }, ref) => (
  <CMD.Separator
    ref={ref}
    className={cx('-mx-1 h-px bg-border', className)}
    {...props}
  />
))

export const CommandItem = forwardRef<ElementRef<typeof CMD.Item>, ComponentPropsWithoutRef<typeof CMD.Item>
>(({ className, ...props }, ref) => (
  <CMD.Item
    ref={ref}
    className={cx(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=\'true\']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50',
      className,
    )}
    {...props}
  />
))
