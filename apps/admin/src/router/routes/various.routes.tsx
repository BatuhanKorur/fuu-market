import { Routes } from '@/app'
import Account from '@/views/various/Account'
import System from '@/views/various/System'

export const VariousRoutes = [
  {
    path: Routes.VARIOUS.ACCOUNT,
    children: [
      {
        index: true,
        element: <Account />,
      },
    ],
  },
  {
    path: Routes.VARIOUS.SYSTEM,
    children: [
      {
        index: true,
        element: <System />,
      },
    ],
  },
]
