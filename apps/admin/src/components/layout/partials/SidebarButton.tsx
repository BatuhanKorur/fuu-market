import { useStore, cx, Configs } from '@/app'
import { CaretLeft } from '@phosphor-icons/react'

/**
 *       <div
 *         className="absolute top-3.5 z-10"
 *         style={{
 *           left: sidebarTogglePosition,
 *           transition: 'left 200ms ease-in-out',
 *         }}
 *       >

 */
export function SidebarButton() {
  const { sidebarOpen, toggleSidebar } = useStore()
  const sidebarTogglePosition = (sidebarOpen ? Configs.width.sidebar : Configs.width.toolbar) - 12
  return (
    <button
      className={cx(
        'absolute flex-center top-3.5 trans-200 p-1 rounded-full z-[15]',
        'bg-muted text-foreground/80 trans-200 hover:brightness-110',
      )}
      style={{
        left: sidebarTogglePosition,
      }}
      onClick={toggleSidebar}
    >
      <CaretLeft
        size={18}
        className={cx(
          'p-0.5 trans-150',
          sidebarOpen ? 'rotate-0' : 'rotate-180')}
      />
    </button>
  )
}
