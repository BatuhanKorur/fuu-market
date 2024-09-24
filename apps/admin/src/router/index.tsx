import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { DashboardIndex } from '@/views/dashboard/DashboardIndex'
import { UsersRoutes } from './routes/users.routes'
import { ProductsRoutes } from './routes/products.routes'
import { SalesRoutes } from '@/router/routes/sales.routes'
import { MediaRoutes } from '@/router/routes/media.routes'
import { VariousRoutes } from '@/router/routes/various.routes'
import Login from '@/views/auth/Login'
const Routes: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardIndex />,
      },
      ...UsersRoutes,
      ...ProductsRoutes,
      ...SalesRoutes,
      ...MediaRoutes,
      ...VariousRoutes,
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default Routes
