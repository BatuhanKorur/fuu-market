import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar.tsx'
import { Navbar } from '@/components/layout/Navbar.tsx'
import { Configs } from '@/app'
export function Layout() {
  return (
    <div className="isolate min-h-svh flex flex-col w-full h-full">
      <Sidebar />
      <div
        className="grow w-full h-full"
        style={{
          paddingLeft: Configs.SIDEBAR_WIDTH.OPEN,
        }}
      >
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}
