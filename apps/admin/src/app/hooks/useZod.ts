import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function useZod<T extends zod.ZodRawShape>(shape: T) {
  const schema = zod.object(shape)
  const resolver = zodResolver(schema)

  return {
    schema,
    resolver,
  }
}
