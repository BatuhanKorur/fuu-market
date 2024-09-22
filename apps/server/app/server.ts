import { env } from '@/core'
import express from 'express'

class Server {
  server: express.Application = express()

  constructor() {
    this.server.use(express.json())
    this.setupStorage()
  }

  private setupStorage() {
    this.server.use(`/${env.STORAGE_LOCATION}`, express.static('storage'))
  }

  public start() {
    this.server.listen(env.PORT, () => {
      console.log('Server running on port', env.PORT)
    })
  }
}

const server = new Server()
server.start()
