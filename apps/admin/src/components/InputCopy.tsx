import { FormField, Input } from '@fuu/ui'
import { Copy } from '@phosphor-icons/react'
export function InputCopy({ str }: {
  str: string
}) {
  const handleCopy = () => {
    console.log('Hello')
  }
  return (
    <FormField className="bg-muted trans-150 hover:bg-muted/80 relative w-full">
      <Input styled="none" className="w-full text-foreground/65 text-sm" value={str} disabled />
      <button onClick={handleCopy} className="absolute inset-0">
        <div className="flex items-center flex-row-reverse pr-2.5">
          <Copy size={22} />
        </div>
      </button>
    </FormField>
  )
}
