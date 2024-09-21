import { Configs, cva } from '@/app'

const SidebarStyle = cva({
  variants: {
    type: {
      wrapper: [
        'fixed left-0 border-r z-10 flex flex-col h-full justify-between',
        'transition-all duration-200',
      ],
    },
  },
})
export function Sidebar() {
  return (
    <div
      className={SidebarStyle({ type: 'wrapper' })}
      style={{
        width: Configs.SIDEBAR_WIDTH.OPEN,
      }}
    >
      <p>Sidebar</p>
    </div>
  )
}
