import { Links } from '@/app'
import UsersIndex from '@/views/users/UsersIndex'
export const UsersRoutes = [
  {
    path: Links.Routes.USERS.index,
    children: [
      {
        index: true,
        element: <UsersIndex />,
      },
    ],
  },
]
