import { type UseQueryResult } from '@tanstack/react-query'
import { type ColumnDef, useReactTable, flexRender, getCoreRowModel, getSortedRowModel, SortingState } from '@tanstack/react-table'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableData } from '@fuu/ui'
import { useState } from 'react'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  query: UseQueryResult
}

export function DataTable<TData, TValue>({ columns, query }: DataTableProps<TData, TValue>) {
  const { data, isLoading, isError, error } = query as UseQueryResult<TData[]>
  if (isLoading) return <div>Loading...</div>
  if (isError) return (
    <div>
      Error:
      {error.message}
    </div>
  )

  const [sorting, setSorting] = useState<SortingState>([])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <div>
      <Table>
        {table.getHeaderGroups().map(headerGroup => (
          <TableHead key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              console.log(header)
              return (
                <TableHeader key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : (flexRender(header.column.columnDef.header, header.getContext()))}
                </TableHeader>
              )
            })}
          </TableHead>
        ))}
        <TableBody>
          {table.getRowModel().rows?.length
            ? (
                table.getRowModel().rows.map(row => (
                  <TableRow
                    key={row.id}
                  >
                    {row.getVisibleCells().map(cell => (
                      <TableData key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableData>
                    ))}
                  </TableRow>
                ))
              )
            : (
                <TableRow>
                  <TableData className="h-24 text-center">
                    No results.
                  </TableData>
                </TableRow>
              )}
        </TableBody>
      </Table>
    </div>
  )
}
