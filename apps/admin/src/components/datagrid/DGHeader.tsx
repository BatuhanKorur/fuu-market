import { Input } from '@fuu/ui'
import { DGVisibilityButton } from '@/components'

export function DGHeader({ table }) {
  return (
    <div className="grid grid-cols-3 gap-x-2 mb-2.5">
      <Input.Text
        onChange={e => table.setGlobalFilter(String(e.target.value))}
        placeholder="Search..."
      />
      <DGVisibilityButton table={table} />
    </div>
  )
}
