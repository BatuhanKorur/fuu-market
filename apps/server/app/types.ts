import { ApiRoutes } from '@fuu/types'
import { NextFunction, Request, Response, Router } from 'express'

export interface DataController {
  path: ApiRoutes
  router: Router
  index(req: Request, res: Response, next: NextFunction): Promise<void>
  get(req: Request, res: Response, next: NextFunction): Promise<void>
  create(req: Request, res: Response, next: NextFunction): Promise<void>
  update(req: Request, res: Response, next: NextFunction): Promise<void>
  delete(req: Request, res: Response, next: NextFunction): Promise<void>
}
