import { Links } from '@/app'
import MediaIndex from '@/views/media/MediaIndex'

export const MediaRoutes = [
  {
    path: Links.Routes.MEDIA.index,
    children: [
      {
        index: true,
        element: <MediaIndex />,
      },
    ],
  },
]
