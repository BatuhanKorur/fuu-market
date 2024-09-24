import { Routes } from '@/app'
import MediaIndex from '@/views/media/MediaIndex'

export const MediaRoutes = [
  {
    path: Routes.MEDIA.index,
    children: [
      {
        index: true,
        element: <MediaIndex />,
      },
    ],
  },
]
