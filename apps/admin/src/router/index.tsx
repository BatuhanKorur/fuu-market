import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { DashboardIndex } from '@/views/dashboard/DashboardIndex'
import { UsersRoutes } from './routes/users.routes'
import { ProductsRoutes } from './routes/products.routes'
import { SalesRoutes } from '@/router/routes/sales.routes'
import { MediaRoutes } from '@/router/routes/media.routes'

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
    ],
  },
])

export default Routes
