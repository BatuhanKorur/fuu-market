import { Links } from '@/app'
import Account from '@/views/various/Account'
import System from '@/views/various/System'

export const VariousRoutes = [
  {
    path: Links.Routes.VARIOUS.ACCOUNT,
    children: [
      {
        index: true,
        element: <Account />,
      },
    ],
  },
  {
    path: Links.Routes.VARIOUS.SYSTEM,
    children: [
      {
        index: true,
        element: <System />,
      },
    ],
  },
]
