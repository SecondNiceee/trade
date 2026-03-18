import { createClient, type QueryParams } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
})

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 0,
  tags = [],
}: {
  query: string
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate,
      tags: tags.length ? tags : undefined,
    },
  })
}
