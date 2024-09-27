import * as Radix from '@radix-ui/react-tabs'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { cx } from '../../lib'

export const Tabs = Radix.Root

export const TabList = forwardRef<ElementRef<typeof Radix.List>, ComponentPropsWithoutRef<typeof Radix.List>>(
  ({ className, ...props }, ref) => {
    return (
      <Radix.List
        ref={ref}
        className={cx(
          'inline-flex-center h-10 bg-muted p-1',
          className,
        )}
        {...props}
      />
    )
  })

export const TabsTrigger = forwardRef<
  ElementRef<typeof Radix.Trigger>,
  ComponentPropsWithoutRef<typeof Radix.Trigger>
>(({ className, ...props }, ref) => (
  <Radix.Trigger
    ref={ref}
    className={cx(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      className,
    )}
    {...props}
  />
))

export const TabsContent = forwardRef<
  ElementRef<typeof Radix.Content>,
  ComponentPropsWithoutRef<typeof Radix.Content>
>(({ className, ...props }, ref) => (
  <Radix.Content
    ref={ref}
    className={cx(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
))
