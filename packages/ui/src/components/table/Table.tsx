import { forwardRef, HTMLAttributes } from 'react'
import { cx } from '../../lib'
import { CaretUpDown } from '@phosphor-icons/react'

export const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="w-full overflow-auto border rounded">
        <table
          ref={ref}
          className={cx(
            'w-full text-base',
            className,
          )}
          {...props}
        >
          {children}
        </table>
      </div>
    )
  },
)

export const TableHead = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={cx(
          '[&_tr:last-child] border-b',
          className,
        )}
        {...props}
      >
        <tr>
          {children}
        </tr>
      </thead>
    )
  },
)

export const TableHeader = forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement> & {
  sortable?: boolean
  onSort?: () => void
}>(
    ({ className, ...props }, ref) => {
      return (
        <th
          ref={ref}
          className={cx(
            'h-10 px-3.5 text-[0.8rem] leading-4 text-left font-normal text-foreground/75',
            className,
          )}
          {...props}
        />
      )
    },
    )

export const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ children, ...props }, ref) => {
    return (
      <tbody ref={ref} {...props}>
        {children}
      </tbody>
    )
  },
)

export const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={cx(
          '[&_tr:last-child]:border-0',
          className,
        )}
        {...props}
      >
        {children}
      </tr>
    )
  },
)

export const TableData = forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={cx(
          'px-4 py-3.5 align-middle [&:has([role=checkbox])]:pr-0',
          'text-[0.9rem] tracking-[-0.0125em] font-[410]',
          className,
        )}
        {...props}
      >
        {children}
      </td>
    )
  },
)

export const TableCaption = forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(
  ({ children, ...props }, ref) => {
    return (
      <caption ref={ref} {...props}>
        {children}
      </caption>
    )
  },
)

export const TableFooter = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ children, ...props }, ref) => {
    return (
      <tfoot ref={ref} {...props}>
        {children}
      </tfoot>
    )
  },
)
