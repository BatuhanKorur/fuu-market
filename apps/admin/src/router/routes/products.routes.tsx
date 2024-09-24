import { Routes } from '@/app'
import ProductsIndex from '@/views/products/ProductsIndex'

export const ProductsRoutes = [
  {
    path: Routes.PRODUCTS.index,
    children: [
      {
        index: true,
        element: <ProductsIndex />,
      },
    ],
  },
]
