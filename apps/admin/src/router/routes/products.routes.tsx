import { Links } from '@/app'
import ProductsIndex from '@/views/products/ProductsIndex'

export const ProductsRoutes = [
  {
    path: Links.Routes.PRODUCTS.index,
    children: [
      {
        index: true,
        element: <ProductsIndex />,
      },
    ],
  },
]
