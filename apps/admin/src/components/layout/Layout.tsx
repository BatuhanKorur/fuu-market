import { Outlet } from 'react-router-dom'
import { Configs, useStore } from '@/app'
import { Sidebar, Navbar, SidebarButton } from '@/components'
export function Layout() {
  const { sidebarOpen } = useStore()
  return (
    <div className="flex flex-col w-full h-full min-h-svh">
      <Sidebar />
      <SidebarButton />
      <div
        className="w-full h-full flex flex-col grow"
        style={{ paddingLeft: sidebarOpen ? Configs.width.sidebar : Configs.width.toolbar }}
      >
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}
