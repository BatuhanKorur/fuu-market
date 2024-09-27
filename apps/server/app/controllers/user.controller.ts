import { Response, Request, NextFunction, Router } from 'express'
import { DataController } from '@/types'
import { ApiRoutes } from '@fuu/types'
import { User } from '@/models'
import { ApiResponse } from '@/api'
export class UserController implements DataController {
  path = ApiRoutes.USERS
  router: Router = Router()

  constructor() {
    this.router.get(`${this.path}`, this.index)
    this.router.post(`${this.path}`, this.create)
  }

  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await User.find({})
      ApiResponse.ok(res, users)
    }
    catch (error) {
      next(error)
    }
  }

  get = async () => {}
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newUser = await User.create({
        ...req.body,
      })
      ApiResponse.created(res, newUser)
    }
    catch (error) {
      next(error)
    }
  }

  update = async () => {}
  delete = async () => {}
}
