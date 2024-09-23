import { forwardRef, ElementRef, ComponentPropsWithoutRef, HTMLAttributes } from 'react'
import { cva, cx, type VariantProps } from '../lib'
import * as radix from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'

export const SheetVariants = {
  side: {
    top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
    bottom:
      'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
    left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
    right:
      'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
  },
}

const Styles = cva({
  variants: {
    ...SheetVariants,
    base: {
      header: 'flex flex-col text-left mb-1',
      title: 'text-xl font-semibold text-foreground',
      description: 'text-base text-muted-foreground',
      overlay: [
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      ],
      close: [
        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
        '[&>svg]:size-[1.5rem]',
      ],
      content: [
        'fixed z-50 bg-background shadow-lg',
        'gap-4 transition ease-in-out transform',
        'data-[state=open]:animate-in data-[state=open]:duration-300',
        'data-[state=closed]:animate-out data-[state=closed]:duration-200',
      ],
    },
  },
})

export const Sheet = radix.Root

export const SheetTrigger = radix.Trigger

export const SheetClose = forwardRef<ElementRef<typeof radix.Close>, ComponentPropsWithoutRef<typeof radix.Close>>(
  ({ className, ...props }, ref) => (
    <radix.Close className={cx(Styles({ base: 'close' }), className)} ref={ref} {...props} />
  ),
)
export const SheetOverlay = forwardRef<ElementRef<typeof radix.Overlay>, ComponentPropsWithoutRef<typeof radix.Overlay>>(
  ({ className, ...props }, ref) => (
    <radix.Overlay className={cx(Styles({ base: 'overlay' }), className)} ref={ref} {...props} />
  ),
)

export const SheetContent = forwardRef<ElementRef<typeof radix.Content>, ComponentPropsWithoutRef<typeof radix.Content> & {
  side?: VariantProps<typeof Styles>['side']
}>(({ side = 'right', className, children, ...props }, ref) => (
  <radix.Portal>
    <SheetOverlay />
    <radix.Content
      className={cx(Styles({ base: 'content', side }), className)}
      ref={ref}
      {...props}
    >
      { children }
      <SheetClose>
        <X size={20} />
        <span className="sr-only">Close</span>
      </SheetClose>
    </radix.Content>
  </radix.Portal>
))

export const SheetHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cx(Styles({ base: 'header' }), className)}
    {...props}
  />
)

export const SheetTitle = forwardRef<ElementRef<typeof radix.Title>, ComponentPropsWithoutRef<typeof radix.Title>>
(({ className, ...props }, ref) => (
  <radix.Title
    ref={ref}
    className={cx(Styles({ base: 'title' }), className)}
    {...props}
  />
))

export const SheetDescription = forwardRef<ElementRef<typeof radix.Description>, ComponentPropsWithoutRef<typeof radix.Description>>
(({ className, ...props }, ref) => (
  <radix.Description
    ref={ref}
    className={cx(Styles({ base: 'description' }), className)}
    {...props}
  />
))
