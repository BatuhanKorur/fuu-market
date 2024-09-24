import { z } from 'zod'

const envSchema = z.object({
  TZ: z.string().default('Asia/Istanbul'),
  NODE_ENV: z.union([
    z.literal('development'),
    z.literal('testing'),
    z.literal('production'),
  ]).default('development'),
  PORT: z.string().default('4000'),
  API_PREFIX: z.string().default('/v1'),

  DB_URI: z.string().default('mongodb://localhost:27017'),
  DB_NAME: z.string().default('fuu'),

  STORAGE_LOCATION: z.string().default('storage'),

  ADMIN_URL: z.string().default('https://admin.fuu.test'),
  ADMIN_URL_LOCAL: z.string().default('http://localhost:5173'),
})

const env = envSchema.parse(process.env)
export default env
