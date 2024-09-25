import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/layout/Sidebar.tsx'
import { Navbar } from '@/components/layout/Navbar.tsx'
import { Configs, useStore } from '@/app'
import { SidebarButton } from '@/components/layout/partials/SidebarButton.tsx'
import { ToastContainer } from 'react-toastify'
/* import 'react-toastify/dist/ReactToastify.css' */
export function Layout() {
  const { sidebarOpen } = useStore()
  const sidebarTogglePosition = (sidebarOpen ? Configs.SIDEBAR_WIDTH.OPEN : Configs.SIDEBAR_WIDTH.COLLAPSED) - 12
  return (
    <div className="min-h-svh flex flex-col w-full h-full relative">
      <Sidebar />
      <div
        className="absolute top-3.5 z-10"
        style={{
          left: sidebarTogglePosition,
          transition: 'left 200ms ease-in-out',
        }}
      >
        <SidebarButton />
      </div>
      <div
        className="grow w-full h-full flex flex-col"
        style={{
          paddingLeft: sidebarOpen ? Configs.SIDEBAR_WIDTH.OPEN : Configs.SIDEBAR_WIDTH.COLLAPSED,
        }}
      >
        <Navbar />
        <Outlet />
      </div>
      {/*      <div className="">
        <ToastContainer />
      </div> */}
    </div>
  )
}
