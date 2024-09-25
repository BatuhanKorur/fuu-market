import { forwardRef, useState } from 'react'
import { SelectOption } from '@fuu/types'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList, CommandItem } from '../command'
import { cx, FormStyleContainer, FormStyles } from '../../lib'
import { CaretDown } from '@phosphor-icons/react'

interface SelectProps {
  options: SelectOption[]
  onSelect: (value: string) => void
  size: 'sm' | 'md' | 'lg'
}

export const Select = forwardRef<HTMLElement, SelectProps>(
  ({ options, onSelect, size = 'md', ...props }, ref) => {
    const [selected, setSelected] = useState<string>('Please select an option')
    return (
      <div ref={ref} {...props}>
        <Popover>
          <PopoverTrigger asChild>
            <div className={cx(FormStyles({ size }), 'flex items-center pt-px w-full')}>
              <p className="grow leading-none">{selected}</p>
              <CaretDown size={16} />
            </div>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className={cx(
              'p-0',
            )}
          >
            <Command>
              <CommandInput placeholder="Search..." />
              <CommandList>
                <CommandEmpty>No options</CommandEmpty>
                <CommandGroup>
                  { options.map(option => (
                    <CommandItem
                      key={option.value}
                      onSelect={() => {
                        setSelected(option.label)
                        onSelect(option.value)
                      }}
                    >
                      { option.label }
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    )
  })
