import { Configs, useStore } from '@/app'
import { ThemeButton } from './partials/ThemeButton'
import { SidebarButton } from './partials/SidebarButton'
import { NotificationsButton } from './partials/NotificationsButton'
import { ProfileButton } from '@/components/layout/partials/ProfileButton.tsx'
export function Navbar() {
  const { sidebarOpen } = useStore()
  return (
    <div
      className="border-b flex items-center justify-between z-40"
      style={{
        height: Configs.NAVBAR_HEIGHT,
      }}
    >
      <div className="pl-6">
        <input type="search" className="text-base bg-transparent outline-none" placeholder="Search anything..." />
      </div>
      <div className="flex items-center pr-3 space-x-2">
        <NotificationsButton />
        <ThemeButton />
        <ProfileButton className="pl-1.5 inline-flex" />
      </div>
    </div>
  )
}
