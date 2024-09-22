import { z } from 'zod'

const envSchema = z.object({
  TZ: z.string().default('Asia/Istanbul'),
  NODE_ENV: z.union([
    z.literal('development'),
    z.literal('testing'),
    z.literal('production'),
  ]).default('development'),
  PORT: z.string().default('4000'),

  DB_URI: z.string().default('mongodb://localhost:27017'),
  DB_NAME: z.string().default('fuu'),

  STORAGE_LOCATION: z.string().default('storage'),
})

const env = envSchema.parse(process.env)
export default env
