import {
  Gear,
  Bank,
  Mailbox,
  House,
  HardDrives,
  Kanban,
  ShoppingBag,
  Wallet,
  Users,
  type Icon,
} from '@phosphor-icons/react'

export interface SidebarLink {
  label: string
  to: string
  Icon: Icon
}

export const Routes = {
  DASHBOARD: '/',
  MEDIA: {
    index: 'media',
  },
  PRODUCTS: {
    index: 'products',
  },
  SALES: {
    index: 'sales',
  },
  USERS: {
    index: 'users',
  },
  SETTINGS: {
    index: 'settings',
    GENERAL: 'general',
    FINANCIALS: 'financials',
    MAIL: 'mail',
  },
  AUTH: {
    LOGIN: 'login',
    LOGOUT: 'logout',
  },
  VARIOUS: {
    ACCOUNT: 'account',
    SYSTEM: 'system',
  },
}

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    label: 'Dashboard',
    to: Routes.DASHBOARD,
    Icon: Kanban,
  },
  {
    label: 'Media',
    to: Routes.MEDIA.index,
    Icon: HardDrives,
  },
  {
    label: 'Products',
    to: Routes.PRODUCTS.index,
    Icon: ShoppingBag,
  },
  {
    label: 'Sales',
    to: Routes.SALES.index,
    Icon: Wallet,
  },
  {
    label: 'Users',
    to: Routes.USERS.index,
    Icon: Users,
  },

]

export const SIDEBAR_SETTINGS_LINKS: SidebarLink[] = [
  {
    label: 'General',
    to: `${Routes.SETTINGS.index}/${Routes.SETTINGS.GENERAL}`,
    Icon: Gear,
  },
  {
    label: 'Financials',
    to: `${Routes.SETTINGS.index}/${Routes.SETTINGS.FINANCIALS}`,
    Icon: Bank,
  },
  {
    label: 'Mail',
    to: `${Routes.SETTINGS.index}/${Routes.SETTINGS.MAIL}`,
    Icon: Mailbox,
  },
]

export const NAV_PROFILE_LINKS: SidebarLink[] = [
  {
    label: 'Account',
    to: Routes.VARIOUS.ACCOUNT,
    Icon: House,
  },
  {
    label: 'System',
    to: Routes.VARIOUS.SYSTEM,
    Icon: Gear,
  },
  {
    label: 'Logout',
    to: Routes.AUTH.LOGOUT,
    Icon: Gear,
  },
]
