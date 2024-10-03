import { type UseQueryResult } from '@tanstack/react-query'
import { type ColumnDef, type TableOptions, flexRender, useReactTable } from '@tanstack/react-table'
import { Input, Skeleton, Table } from '@fuu/ui'
import { DGError, DGFooter, DGHeader, DGOptions, DGOptionsProps } from '@/components'

interface DataGridProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  query: UseQueryResult
  options: DGOptionsProps
}

export function DataGrid<TData, TValue>({ columns, query, options = DGOptions.defaults }: DataGridProps<TData, TValue>) {
  const { isPending, isError, data, error } = query as UseQueryResult<TData[]>
  if (isPending) return <Skeleton />
  if (isError) return <DGError error={error} />

  let tableConfig: TableOptions<TData> = {
    data,
    columns,
    ...DGOptions.init(),
  }

  if (options.paginate) {
    tableConfig = DGOptions.addPagination(tableConfig, options.paginationSize)
  }

  if (options.globalFilter) {
    tableConfig = DGOptions.addGlobalFilter(tableConfig)
  }

  if (options.columnFilters) {
    tableConfig = DGOptions.addColumnVisibility(tableConfig)
  }

  const table = useReactTable(tableConfig)

  return (
    <div>
      <DGHeader table={table} />
      <div className="border rounded-md">
        <Table.Root>
          {table.getHeaderGroups().map(headerGroup => (
            <Table.Head key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                console.log(header)
                return (
                  <Table.Header key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : (flexRender(header.column.columnDef.header, header.getContext()))}
                  </Table.Header>
                )
              })}
            </Table.Head>
          ))}
          <Table.Body>
            {table.getRowModel().rows?.length
              ? (
                  table.getRowModel().rows.map(row => (
                    <Table.Row
                      key={row.id}
                    >
                      {row.getVisibleCells().map(cell => (
                        <Table.Data key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </Table.Data>
                      ))}
                    </Table.Row>
                  ))
                )
              : (
                  <Table.Row>
                    <Table.Data className="h-24 text-center">
                      No results.
                    </Table.Data>
                  </Table.Row>
                )}
          </Table.Body>
        </Table.Root>
        { options.footer && <DGFooter table={table} pagination={options.paginate} /> }
      </div>
    </div>
  )
}
