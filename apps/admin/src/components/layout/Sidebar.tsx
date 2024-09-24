import {
  Configs,
  SidebarLinks,
  SidebarSettingsLinks,
  useStore,
  cx,
} from '@/app'
import { Theme, LinkItem } from '@/types'
import { getAsset } from '@/utils'
import { NavLink } from 'react-router-dom'
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem, Tooltip } from '@fuu/ui'
import { Gear } from '@phosphor-icons/react'
import { ReactNode, useEffect, useState } from 'react'

function SidebarContainer({ children }: { children: ReactNode }) {
  const { sidebarOpen } = useStore()
  return (
    <div
      className="fixed left-0 border-r h-full z-[10] flex flex-col justify-between trans-150"
      style={{
        width: sidebarOpen ? Configs.SIDEBAR_WIDTH.OPEN : Configs.SIDEBAR_WIDTH.COLLAPSED,
      }}
    >
      {children}
    </div>
  )
}

function SidebarHead() {
  const { theme } = useStore()
  const logoUrl = theme === Theme.DARK ? getAsset('logo-white.svg') : getAsset('logo-black.svg')
  return (
    <div
      className="border-b flex items-center px-4 space-x-2"
      style={{ height: Configs.NAVBAR_HEIGHT }}
    >
      <img src={logoUrl} alt={Configs.APP_NAME} className="h-6" />
    </div>
  )
}

export function SidebarContent() {
  return (
    <div className="mt-2">
      {SidebarLinks.map(link => <SidebarItem to={link.to} Icon={link.Icon} label={link.label} />)}
    </div>
  )
}

export function SidebarItem({ to, label, Icon }: LinkItem) {
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
        'text-foreground rounded-md trans-150 hover:bg-muted',
        'flex items-center h-10 my-1 mx-1.5 space-x-2 pl-2',
      )}
    >
      {sidebarOpen
        ? <Icon size={24} />
        : (
            <Tooltip tip={label} side="left" sideOffset={-4} delay={150}>
              <Icon size={24} />
            </Tooltip>
          )}
      {showLabel && <p className="text-base font-[425]">{label}</p>}
    </NavLink>
  )
}

export function SidebarFooter() {
  const { sidebarOpen } = useStore()
  return (
    <Accordion type="single" collapsible className="border-t">
      <AccordionItem value="settings">
        <AccordionTrigger showCaret={sidebarOpen}>
          <div className="flex items-center space-x-2 px-3.5 py-4 trans-200 hover:opacity-75">
            <Gear size={24} />
            <span className={sidebarOpen ? 'inline-block' : 'hidden'}>Settings</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {SidebarSettingsLinks.map(link => (
            <SidebarItem to={link.to} Icon={link.Icon} label={link.label} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function Sidebar() {
  return (
    <SidebarContainer>
      <div>
        <SidebarHead />
        <SidebarContent />
      </div>
      <SidebarFooter />
    </SidebarContainer>
  )
}
