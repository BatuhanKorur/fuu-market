import { useState } from 'react'
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type PaginationState,
  TableOptions,
} from '@tanstack/react-table'

export interface DGOptionsProps {
  footer: boolean
  paginate: boolean
  paginationSize: number
  globalFilter: boolean
  columnFilters: boolean
}

export const DGOptions = {
  defaults: {
    footer: true,
    paginate: true,
    paginationSize: 10,
    globalFilter: true,
    columnFilters: true,
  },

  init: () => {
    return {
      getCoreRowModel: getCoreRowModel(),
      state: {},
    }
  },

  addPagination: <T>(table: TableOptions<T>, size: number): TableOptions<T> => {
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: size,
    })
    return {
      ...table,
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: setPagination,
      state: {
        ...table.state,
        pagination,
      },
    }
  },

  addGlobalFilter: <T>(table: TableOptions<T>): TableOptions<T> => {
    const [globalFilter, setGlobalFilter] = useState('')
    return {
      ...table,
      getFilteredRowModel: getFilteredRowModel(),
      onGlobalFilterChange: setGlobalFilter,
      state: {
        ...table.state,
        globalFilter,
      },
    }
  },

  addColumnVisibility: <T>(table: TableOptions<T>): TableOptions<T> => {
    const [columnVisibility, setColumnVisibility] = useState({})
    return {
      ...table,
      onColumnVisibilityChange: setColumnVisibility,
      state: {
        ...table.state,
        columnVisibility,
      },
    }
  },
}
