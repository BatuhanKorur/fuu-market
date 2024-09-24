import { env } from '@/core'

export const corsConfig = {
  origin: [
    env.ADMIN_URL,
    env.ADMIN_URL_LOCAL,
  ],
  credentials: true,
  exposedHeaders: ['set-cookie'],
}
