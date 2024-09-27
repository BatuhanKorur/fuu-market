import { HeaderCell } from '@fuu/ui'

export const UserColumns = [
  {
    accessorKey: 'fullName',
    header: ({ column }) => {
      return <HeaderCell sortable onSort={() => column.toggleSorting(column.getIsSorted() === 'asc')}>Created At</HeaderCell>
    },
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
]
