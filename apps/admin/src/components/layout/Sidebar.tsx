import { Configs, Links, useStore, cx } from '@/app'
import { Theme } from '@/types'
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from '@fuu/ui'
import { SidebarLink } from './partials/SidebarLink'
import { Gear } from '@phosphor-icons/react'

export function Sidebar() {
  const { theme, sidebarOpen } = useStore()
  const logoUrl = theme === Theme.DARK
    ? Configs.STORAGE_PATH + '/logo-white.svg'
    : Configs.STORAGE_PATH + '/logo-black.svg'

  return (
    <div
      className="fixed left-0 border-r flex flex-col h-full justify-between transition-all duration-200 z-[2]"
      style={{
        width: sidebarOpen ? Configs.SIDEBAR_WIDTH.OPEN : Configs.SIDEBAR_WIDTH.COLLAPSED,
      }}
    >
      <div>
        <div
          className="border-b flex items-center px-4 space-x-2"
          style={{ height: Configs.NAVBAR_HEIGHT }}
        >
          <img src={logoUrl} alt={Configs.APP_NAME} className="h-6" />
          <p className={cx('text-base font-medium transition-all duration-500 ease-in-out', sidebarOpen ? 'inline-block' : 'hidden')}>
            {Configs.APP_NAME}
          </p>
        </div>
        <div className="mt-2">
          { Links.SIDEBAR_LINKS.map(link => <SidebarLink to={link.to} Icon={link.Icon} label={link.label} />)}
        </div>
      </div>
      <div className="border-t">
        <Accordion type="single" collapsible>
          <AccordionItem value="settings">
            <AccordionTrigger showCaret={sidebarOpen}>
              <div className="flex items-center space-x-2 px-3 py-4">
                <Gear size={24} />
                <span className={sidebarOpen ? 'inline-block' : 'hidden'}>Settings</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {Links.SIDEBAR_SETTINGS_LINKS.map(link => (
                <SidebarLink to={link.to} Icon={link.Icon} label={link.label} className="last-of-type:pb-4" />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
