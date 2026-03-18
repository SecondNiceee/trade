import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
})

export const urlForImage = (source: Image | undefined) => {
  if (!source?.asset?._ref) {
    return undefined
  }
  return imageBuilder.image(source).auto('format').fit('max')
}
