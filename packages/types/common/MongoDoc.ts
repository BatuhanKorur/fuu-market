export interface MongoDoc {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface MongoDocWithSlug extends MongoDoc {
  slug: string
}
