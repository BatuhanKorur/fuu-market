import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { ENV, Cors, Database, Log, Mailer } from '@/core'
import { Controllers } from '@/controllers'

class Server {
  server: express.Application = express()
  database = new Database()
  mailer = new Mailer()

  constructor() {
    // Configure server
    this.server.use(cors(Cors.getConfig()))
    this.server.use(express.json())
    this.server.use(morgan('dev'))
    this.server.use(`/${ENV.STORAGE_LOCATION}`, express.static('storage'))

    // Database initialization
    this.database.init()
    this.server.locals.mailer = this.mailer

    // Setup API services
    Controllers.forEach((controller) => {
      this.server.use(ENV.API_PREFIX, new controller().router)
    })
  }

  public start() {
    this.server.listen(ENV.PORT, () => {
      Log.success(`Server Running (Port:${ENV.PORT})`)
    })
  }
}

const server = new Server()
server.start()
