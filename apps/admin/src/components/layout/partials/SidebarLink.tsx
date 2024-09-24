import { NavLink, NavLinkProps } from 'react-router-dom'
import { type Icon } from '@phosphor-icons/react'
import { cx, useStore } from '@/app'
import { FocusWithin, Tooltip } from '@fuu/ui'
import { useEffect, useState } from 'react'

interface SidebarLinkProps extends NavLinkProps {
  to: string
  label: string
  Icon: Icon
  iconSize?: number
  className?: string
}

export function SidebarLink({ to, label, Icon, iconSize = 24, className, ...props }: SidebarLinkProps) {
  const { sidebarOpen } = useStore()
  const [showLabel, setShowLabel] = useState(sidebarOpen)

  useEffect(() => {
    const timer = setTimeout(() => setShowLabel(sidebarOpen), 50)
    return () => clearTimeout(timer)
  }, [sidebarOpen])

  return (
    <NavLink
      to={to}
      className={cx(
        'group flex items-center space-x-4 py-3 px-3.5 trans-200 hover:opacity-80',
        FocusWithin,
        className,
      )}
      {...props}
    >
      { sidebarOpen
        ? (
            <Icon size={iconSize} />
          )
        : (
            <Tooltip tip={label} side="left" sideOffset={-4} delay={150}>
              <Icon size={iconSize + (iconSize * 0.1)} />
            </Tooltip>
          )}
      {showLabel && <p className="text-base font-[425]">{label}</p>}
    </NavLink>
  )
}
