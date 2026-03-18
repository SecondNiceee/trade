'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

// Hardcoded for Sanity Studio deployment
// Replace with your actual project ID from https://manage.sanity.io
const projectId = 'wv2ifpz9' // Your Sanity project ID
const dataset = 'production'

export default defineConfig({
  name: 'silkon-studio',
  title: 'SILKON 2026',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],
  schema,
})
