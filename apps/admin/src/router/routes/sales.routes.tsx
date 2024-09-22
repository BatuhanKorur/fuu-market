import { Links } from '@/app'
import SalesIndex from '@/views/sales/SalesIndex'

export const SalesRoutes = [
  {
    path: Links.Routes.SALES.index,
    children: [
      {
        index: true,
        element: <SalesIndex />,
      },
    ],
  },
]
