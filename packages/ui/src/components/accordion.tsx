import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import * as radix from '@radix-ui/react-accordion'
import { cva, cx } from '../lib'
import { CaretDown } from '@phosphor-icons/react'
const Styles = cva({
  variants: {
    base: {
      trigger: [
        'flex flex-1 grow items-center justify-between',
        'transition-all duration-150 ease-in-out',
      ],
      triggerIcon: 'h-4 w-4 shrink-0 mr-3.5 [data-state=open]:rotate-180',
      content: 'overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
    },
  },
})
export const Accordion = radix.Root

export const AccordionItem = forwardRef<ElementRef<typeof radix.Item>, ComponentPropsWithoutRef<typeof radix.Item>>(
  ({ className, ...props }, ref) => (
    <radix.Item ref={ref} className={className} {...props} />
  ),
)

export const AccordionTrigger = forwardRef<ElementRef<typeof radix.Trigger>, ComponentPropsWithoutRef<typeof radix.Trigger> & {
  showCaret?: boolean
}>(
  ({ className, children, showCaret = true, ...props }, ref) => (
    <radix.Header className="flex items-center">
      <radix.Trigger ref={ref} className={cx(Styles({ base: 'trigger' }), className)} {...props}>
        { children }
      </radix.Trigger>
      {showCaret && <CaretDown className={Styles({ base: 'triggerIcon' })} />}
    </radix.Header>
  ),
)

export const AccordionContent = forwardRef<ElementRef<typeof radix.Content>, ComponentPropsWithoutRef<typeof radix.Content>>(
  ({ className, ...props }, ref) => (
    <radix.Content ref={ref} className={cx(Styles({ base: 'content' }), className)} {...props} />
  ),
)
