import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Table } from '@tanstack/react-table'
import { cx } from '@/app'

interface DGFooterProps<TData> {
  table: Table<TData>
  pagination: boolean
}

export function DGFooter<TData>({ table, pagination }: DGFooterProps<TData>) {
  const RowCount = () => {
    return (
      <span className="text-xs text-muted-foreground leading-5">
        {`Showing ${table.getRowModel().rows.length.toLocaleString()} of ${table.getRowCount().toLocaleString()} Rows`}
      </span>
    )
  }

  const PaginationCount = () => {
    return (
      <span className="text-sm font-[475] tracking-[3px]">
        {`${table.getState().pagination.pageIndex + 1}/${table.getPageCount().toLocaleString()}`}
      </span>
    )
  }

  const CaretButton = ({ direction }: { direction: 'prev' | 'next' }) => {
    return (
      <button
        className={cx(
          'p-1.5 rounded-md bg-black/20 disabled:cursor-default',
          'trans-150 [&:not(:disabled)]:hover:shadow-md',
          '[&:not(:disabled)>svg]:trans-150 [&:not(:disabled)>svg]:hover:text-primary-foreground/75',
        )}
        onClick={() => direction === 'prev' ? table.previousPage() : table.nextPage()}
        disabled={direction === 'prev' ? !table.getCanPreviousPage() : !table.getCanNextPage()}
      >
        { direction === 'prev' ? <CaretLeft size={14} weight="bold" /> : <CaretRight size={14} weight="bold" /> }
      </button>
    )
  }

  return (
    <div className="bg-muted rounded-b-md flex items-center justify-between py-2 px-4">
      <RowCount />
      { pagination && (
        <div className="flex items-center space-x-2">
          <CaretButton direction="prev" />
          <PaginationCount />
          <CaretButton direction="next" />
        </div>
      )}
    </div>
  )
}
