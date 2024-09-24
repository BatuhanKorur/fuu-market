import { Routes } from '@/app'
import SalesIndex from '@/views/sales/SalesIndex'

export const SalesRoutes = [
  {
    path: Routes.SALES.index,
    children: [
      {
        index: true,
        element: <SalesIndex />,
      },
    ],
  },
]
