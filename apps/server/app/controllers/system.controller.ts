import os from 'node:os'
import { Router, Response, Request, NextFunction } from 'express'
import { ApiResponse, ApiPaths } from '@/api'

export class SystemController {
  router: Router = Router()

  constructor() {
    this.router.get(ApiPaths.system.details, this.getDetails)
  }

  private getDetails(req: Request, res: Response, next: NextFunction) {
    try {
      const data = {
        platform: os.platform(),
        type: os.type(),
        port: process.env.PORT,
        timezone: process.env.TZ,
        version: process.env.npm_package_version,
        nodeVersion: process.version,
      }
      ApiResponse.ok(res, data)
    }
    catch (error) {
      next(error)
    }
  }
}
