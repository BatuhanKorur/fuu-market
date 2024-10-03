import { Button, Checkbox, Command, CommandItem, CommandList, Popover, PopoverContent, PopoverTrigger } from '@fuu/ui'
import { Eye } from '@phosphor-icons/react'
export function DGVisibilityButton({ table }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button icon="only" color="outlined">
          <Eye size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0">
        <Command placeholder="Filter columns">
          <Command.List>
            {table
              .getAllColumns()
              .filter(column => column.getCanHide())
              .map((column) => {
                return (
                  <CommandItem key={column.id}>
                    <Checkbox />
                    <input
                      checked={column.getIsVisible()}
                      disabled={!column.getCanHide()}
                      onChange={column.getToggleVisibilityHandler()}
                      type="checkbox"
                    />
                    {column.columnDef.header}
                  </CommandItem>
                )
              })}
          </Command.List>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
