import mongoose from 'mongoose'
import { ENV, Log } from '@/core'
export class Database {
  private dbUri: string
  private dbName: string

  constructor() {
    this.dbUri = ENV.DB_URI
    this.dbName = ENV.DB_NAME
  }

  public init() {
    mongoose.connect(`${this.dbUri}/${this.dbName}`)
      .then(() => Log.success(`Database Connected (${this.dbName})`))
      .catch(e => Log.error(`Database Connection Error!: ${e}`))
  }
}
