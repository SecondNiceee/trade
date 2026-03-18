import { defineLive } from 'next-sanity'
import { client } from './client'

export const { sanityFetch: sanityFetchLive, SanityLive } = defineLive({
  client,
})
