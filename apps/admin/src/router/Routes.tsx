import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { DashboardIndex } from '@/views/dashboard/DashboardIndex.tsx'
const Routes = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardIndex />,
      },
    ],
  },
])

export { Routes }
