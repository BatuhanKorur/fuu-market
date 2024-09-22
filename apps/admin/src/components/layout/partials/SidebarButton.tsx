import { useStore, cx } from '@/app'
import { CaretLeft } from '@phosphor-icons/react'

export function SidebarButton() {
  const { sidebarOpen, toggleSidebar } = useStore()
  return (
    <button
      className="flex-center bg-secondary text-foreground size-[1.55rem] rounded-full z-20 trans-150 hover:brightness-110"
      onClick={toggleSidebar}
    >
      <CaretLeft size={15} className={cx(sidebarOpen ? '' : 'rotate-180', 'transition-all duration-100')} />
    </button>
  )
}
