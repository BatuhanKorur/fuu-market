import express from 'express'
import cors from 'cors'
import { env, corsConfig } from '@/core'
import { Controllers } from '@/controllers'
import morgan from 'morgan'

class Server {
  server: express.Application = express()

  constructor() {
    this.setupStorage()
    this.setupApiService()
    this.server.use(morgan('dev'))
  }

  private setupStorage() {
    this.server.use(`/${env.STORAGE_LOCATION}`, express.static('storage'))
  }

  private setupApiService() {
    this.server.use(cors(corsConfig))
    this.server.use(express.json())
    Controllers.forEach((controller) => {
      this.server.use(env.API_PREFIX, new controller().router)
    })
  }

  public start() {
    this.server.listen(env.PORT, () => {
      console.log('Server running on port', env.PORT)
    })
  }
}

const server = new Server()
server.start()
