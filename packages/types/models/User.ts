import { MongoDoc, UserRole, UserStatus } from '../index'

export interface IUser extends MongoDoc {
  email: string
  password: string
  firstName: string
  lastName: string
  photoUrl: string
  verified: boolean
  role: UserRole
  status: UserStatus
  fullName: string
}
