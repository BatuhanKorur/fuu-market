import { Routes } from '@/app'
import UsersIndex from '@/views/users/UsersIndex'
export const UsersRoutes = [
  {
    path: Routes.USERS.index,
    children: [
      {
        index: true,
        element: <UsersIndex />,
      },
    ],
  },
]
