import { ReactNode } from 'react'

interface HeaderCellProps {
  children: ReactNode
  sortable?: boolean
  onSort?: () => void
}

export const HeaderCell = ({ children, sortable, onSort }: HeaderCellProps) => {
  if (sortable) {
    return (
      <button onClick={onSort}>
        <span>Yolo bro</span>
      </button>
    )
  }
  else {
    return (
      <span>{children}</span>
    )
  }
}
