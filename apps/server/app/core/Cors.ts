import { ENV } from '@/core'

export class Cors {
  static getConfig() {
    return {
      origin: [
        ENV.ADMIN_URL,
        ENV.ADMIN_URL_LOCAL,
        'https://admin.voi.test',
      ],
      credentials: true,
      exposedHeaders: ['set-cookie'],
    }
  }
}
