import { Button } from '@fuu/ui'
import { notify } from '@/app'

export function DashboardIndex() {
  const handleClick = () => {
    console.log('Hello')
    notify('Hello')
  }

  return (
    <div className="p-10">
      <Button onClick={handleClick}>Click me</Button>
    </div>
  )
}
