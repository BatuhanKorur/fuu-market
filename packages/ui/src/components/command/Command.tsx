import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { Command as CMD } from 'cmdk'
import { cx, Disabled, DisabledData, FR } from '../../lib'
import { MagnifyingGlass } from '@phosphor-icons/react'

const Command: FR<typeof CMD, {
  input?: boolean
  placeholder?: string
}> = forwardRef((
  { className, children, input = true, placeholder = 'Search...', ...props }, ref) => (
  <CMD
    ref={ref}
    className={cx('flex flex-col size-full overflow-hidden rounded-md bg-popover text-foreground', className)}
    {...props}
  >
    { input && (
      <div className="flex items-center border-b pl-2.5" cmdk-input-wrapper="">
        <MagnifyingGlass
          size={18}
          weight="light"
          className="mr-1.5 shrink-0 text-foreground/75"
        />
        <CMD.Input
          className={cx(
            'flex w-full bg-transparent outline-none',
            'h-10 text-sm placeholder:text-muted-foreground',
            Disabled,
          )}
          placeholder={placeholder}
        />
      </div>
    )}
    {children}
  </CMD>
))

const CommandList: FR<typeof CMD.List, {
  maxHeight?: number
}> = forwardRef((
  { className, maxHeight = 600, children, ...props }, ref) => (
  <CMD.List
    ref={ref}
    className={cx('overflow-y-auto overflow-x-hidden p-1.5', className)}
    style={{ maxHeight: `${maxHeight}px` }}
    {...props}
  >
    <CMD.Empty ref={ref} className="text-center text-sm py-8">
      No results found
    </CMD.Empty>
    { children }
  </CMD.List>
))

type CommandComponents = typeof Command & {
  List: typeof CommandList
}
const comps: CommandComponents = Object.assign(Command, {
  List: CommandList,
})
export { comps as Command }

export const CommandSeparator = forwardRef<ElementRef<typeof CMD.Separator>, ComponentPropsWithoutRef<typeof CMD.Separator>
>(({ className, ...props }, ref) => (
  <CMD.Separator
    ref={ref}
    className={cx('-mx-1 h-px bg-border', className)}
    {...props}
  />
))

interface CommandItemProps {
  onClick?: () => void | null
}

export const CommandItem: FR<typeof CMD.Item & CommandItemProps> = forwardRef((
  { className, ...props }, ref) => {
  /**
   *'select-none rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=\'true\']:bg-accent data-[selected=true]:text-accent-foreground',
   */

  return (
    <CMD.Item
      ref={ref}
      className={cx(
        'relative flex items-center text-sm px-2.5 py-2',
        'trans-200 rounded-md',
        DisabledData,
        props.onSelect ? 'cursor-pointer hover:bg-muted/60' : 'cursor-default hover:bg-muted/30',
        className)}
      {...props}
    />
  )
})
