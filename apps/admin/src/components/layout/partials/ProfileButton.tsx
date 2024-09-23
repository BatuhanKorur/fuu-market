import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
} from '@fuu/ui'
import { Links } from '@/app'
import { NavLink } from '@/components'

export function ProfileButton({ className }: {
  className?: string
}) {
  return (
    <Dropdown>
      <DropdownTrigger className={className}>
        <Avatar type="square" />
      </DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>
          <div className="px-3 py-2 text-sm">
            <p>Admin Name</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </DropdownLabel>
        <DropdownSeparator />
        { Links.NAV_PROFILE_LINKS.map(link => (
          <DropdownItem key={link.to}>
            <NavLink to={link.to} className="flex items-center space-x-1.5">
              { link.Icon && <link.Icon size={20} /> }
              <span className="text-sm font-[450]">{ link.label }</span>
            </NavLink>
          </DropdownItem>
        ))}
      </DropdownContent>
    </Dropdown>
  )
}
