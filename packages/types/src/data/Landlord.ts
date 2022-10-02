import type { BaseEntity } from './BaseEntity'
import type { Business } from './Business'

type Scalars = {
  name: string
  isVerified: boolean
}

type Associations = {
  doingBusinessAs?: Business[]
  /* ... TODO: */
}

type Virtuals = {
  avgRating: number
}

export type Landlord = Partial<Associations & Scalars & BaseEntity & Virtuals>