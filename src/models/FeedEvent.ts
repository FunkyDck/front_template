import { ISOTimestamp } from "./Timestamp"

export type FeedEvent = {
  at: ISOTimestamp
  title: string
  description?: string
}
