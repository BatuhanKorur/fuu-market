import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import * as Radix from '@radix-ui/react-accordion'
import { CaretDown } from '@phosphor-icons/react'
import { cx } from '../../lib'

export const Accordion = forwardRef<ElementRef<typeof Radix.Root>, ComponentPropsWithoutRef<typeof Radix.Root>>(
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ collapsible, ...props }, ref) => {
    return (
      <Radix.Root
        ref={ref}
        {...props}
      />
    )
  })

export const AccordionItem = forwardRef<ElementRef<typeof Radix.Item>, ComponentPropsWithoutRef<typeof Radix.Item>>(
  ({ className, ...props }, ref) => (
    <Radix.Item
      ref={ref}
      className={cx(
        '',
        className,
      )}
      {...props}
    />
  ),
)

export const AccordionTrigger = forwardRef<ElementRef<typeof Radix.Trigger>, ComponentPropsWithoutRef<typeof Radix.Trigger> & {
  showCaret?: boolean
}>(
  ({ className, children, showCaret = true, ...props }, ref) => (
    <Radix.Header className="flex items-center">
      <Radix.Trigger
        ref={ref}
        className={cx(
          'border-b flex items-center justify-between flex-1 grow trans-150 [&[data-state=open]>svg]:rotate-180',
          'pt-4 pb-3.5 pl-1 pr-3 text-base leading-none font-[425]',
          className,
        )}
        {...props}
      >
        {children}
        {showCaret && (
          <CaretDown className={cx(
            'h-4 w-4 shrink-0',
          )}
          />
        )}
      </Radix.Trigger>
    </Radix.Header>
  ),
)

export const AccordionContent = forwardRef<ElementRef<typeof Radix.Content>, ComponentPropsWithoutRef<typeof Radix.Content>>(
  ({ className, ...props }, ref) => (
    <Radix.Content
      ref={ref}
      className={cx(
        'pt-3 pl-1 text-base',
        'overflow-hidden transition-all',
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className,
      )}
      {...props}
    />
  ),
)
