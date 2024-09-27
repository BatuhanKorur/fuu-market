import { model, Schema } from 'mongoose'
import { IUser } from '@fuu/types'
import { SchemaUtils } from '@/utils'

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
}, {
  ...SchemaUtils.getDefaults(),
})

SchemaUtils.addVirtuals.fullName(UserSchema, 'firstName', 'lastName')
SchemaUtils.addVirtuals.nameInitials(UserSchema, 'firstName', 'lastName')

export const User = model('User', UserSchema)
