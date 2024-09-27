import { Document, Schema } from 'mongoose'
export const SchemaUtils = {
  getDefaults: () => ({
    timestamp: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: (doc: Document, ret: Record<string, unknown>) => {
        delete ret._id
        delete ret.__v
      },
    },
  }),
  addVirtuals: {
    fullName: (schema: Schema, firstName: string, lastName: string) => {
      schema.virtual('fullName').get(function (this: Record<string, string>) {
        return `${this[firstName]} ${this[lastName]}`
      })
    },
    nameInitials: (schema: Schema, firstName: string, lastName: string) => {
      schema.virtual('nameInitials').get(function (this: Record<string, string>) {
        return `${this[firstName][0]}${this[lastName][0]}`
      })
    },
  },
}
