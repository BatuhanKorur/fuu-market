import GeneralSettings from '@/views/settings/GeneralSettings'
import FinancialSettings from '@/views/settings/FinancialSettings'
import MailSettings from '@/views/settings/MailSettings'
import { Routes } from '@/app'

export const SettingsRoutes = [
  {
    path: Routes.SETTINGS.index,
    children: [
      {
        path: Routes.SETTINGS.GENERAL,
        element: <GeneralSettings />,
      },
      {
        path: Routes.SETTINGS.FINANCIALS,
        element: <FinancialSettings />,
      },
      {
        path: Routes.SETTINGS.MAIL,
        element: <MailSettings />,
      },
    ],
  },
]
