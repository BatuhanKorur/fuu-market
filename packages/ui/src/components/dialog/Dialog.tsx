import * as Radix from '@radix-ui/react-dialog'
import { cx, FocusRing, StateAnimation, StateAnimationZoom } from '../../lib'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { X } from '@phosphor-icons/react'

export const Dialog = Radix.Root
export const DialogTrigger = Radix.Trigger

export const DialogContent = forwardRef<ElementRef<typeof Radix.Content>, ComponentPropsWithoutRef<typeof Radix.Content> & {
  title: string
  description?: string
}>(
  ({ className, children, title, description = '', ...props }, ref) => {
    return (
      <Radix.Portal>
        <Radix.Overlay className={cx(
          'fixed inset-0 bg-black/50 backdrop-blur-[3px]',
          StateAnimation,
        )}
        />
        <Radix.Content
          ref={ref}
          aria-describedby={description ? description : undefined}
          className={cx(
            'fixed z-50 grid w-full max-w-lg border bg-background',
            'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 sm:rounded-lg',
            'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
            StateAnimationZoom,
            className,
          )}
          {...props}
        >
          <div>
            <Radix.Title className="text-xl font-semibold">{title}</Radix.Title>
            { description && (<Radix.Description className="text-base text-muted-foreground">{description}</Radix.Description>) }
          </div>
          { children }
          <Radix.Close className={cx(
            'absolute right-4 top-4 rounded-sm',
            'opacity-70 trans-200 hover:opacity-100 disabled:pointer-events-none',
            'data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
            FocusRing,
          )}
          >
            <X size={18} />
            <span className="sr-only">Close</span>
          </Radix.Close>
        </Radix.Content>
      </Radix.Portal>
    )
  })
