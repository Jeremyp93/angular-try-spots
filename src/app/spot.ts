import { Location } from "./location";

export interface Spot {
  id: number,
  name: string,
  category: string,
  season: string,
  location: Location,
  visited: boolean,
  rating?: number
  comment?: string
}
