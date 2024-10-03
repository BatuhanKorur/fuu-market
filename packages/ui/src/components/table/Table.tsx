import { forwardRef, HTMLAttributes } from 'react'
import { cx } from '../../lib'

export const Table = {
  Root: forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
    ({ className, children, ...props }, ref) => (
      <div className="w-full overflow-auto">
        <table className={cx('w-full text-base', className)} {...props}>
          {children}
        </table>
      </div>
    ),
  ),
  Head: forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
    ({ className, children, ...props }, ref) => (
      <thead ref={ref} className={cx('[&_tr:last-child] border-b', className)} {...props}>
        <tr>{children}</tr>
      </thead>
    ),
  ),
  Header: forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement> & { sortable?: boolean, onSort?: () => void }>(
    ({ className, ...props }, ref) => (
      <th ref={ref} className={cx('h-10 px-3.5 text-[0.8rem] leading-4 text-left font-normal text-foreground/75', className)} {...props} />
    ),
  ),
  Body: forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
    ({ children, ...props }, ref) => (
      <tbody ref={ref} {...props}>
        {children}
      </tbody>
    ),
  ),
  Row: forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
    ({ className, children, ...props }, ref) => (
      <tr ref={ref} className={cx('[&_tr:last-child]:border-0', className)} {...props}>
        {children}
      </tr>
    ),
  ),
  Data: forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement>>(
    ({ className, children, ...props }, ref) => (
      <td ref={ref} className={cx('px-4 py-3.5 align-middle [&:has([role=checkbox])]:pr-0 text-[0.9rem] tracking-[-0.0125em] font-[410]', className)} {...props}>
        {children}
      </td>
    ),
  ),
  Caption: forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(
    ({ children, ...props }, ref) => (
      <caption ref={ref} {...props}>
        {children}
      </caption>
    ),
  ),
  Footer: forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
    ({ children, className, ...props }, ref) => (
      <tfoot ref={ref} className={cx('border-t', className)} {...props}>
        {children}
      </tfoot>
    ),
  ),
}
