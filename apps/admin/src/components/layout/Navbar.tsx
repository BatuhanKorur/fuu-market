import { Configs } from '@/app'
import { ThemeButton } from './partials/ThemeButton'
export function Navbar() {
  return (
    <div
      className="border-b flex items-center justify-between px-4"
      style={{
        height: Configs.NAVBAR_HEIGHT,
      }}
    >
      <div>
        <p>First</p>
      </div>
      <div>
        <ThemeButton />
      </div>
    </div>
  )
}
