import {
  Bank,
  Mailbox,
  House,
  HardDrives,
  Kanban,
  ShoppingBag,
  Wallet,
  Users,
  Circuitry,
  Sliders,
  SignOut,
} from '@phosphor-icons/react'
import { LinkItem } from '@/types'

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

export const SidebarLinks: LinkItem[] = [
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

export const SidebarSettingsLinks: LinkItem[] = [
  {
    label: 'General',
    to: `${Routes.SETTINGS.index}/${Routes.SETTINGS.GENERAL}`,
    Icon: Sliders,
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

export const NavProfileLinks: LinkItem[] = [
  {
    label: 'Account',
    to: Routes.VARIOUS.ACCOUNT,
    Icon: House,
  },
  {
    label: 'System',
    to: Routes.VARIOUS.SYSTEM,
    Icon: Circuitry,
  },
  {
    label: 'Logout',
    to: Routes.AUTH.LOGOUT,
    Icon: SignOut,
  },
]
