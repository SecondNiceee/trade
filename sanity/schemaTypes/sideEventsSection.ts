import { defineField, defineType, defineArrayMember } from 'sanity'
import { Star } from 'lucide-react'

export const sideEventsSection = defineType({
  name: 'sideEventsSection',
  title: 'Секция Дополнительных Событий',
  type: 'document',
  icon: Star,
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Заголовок Секции',
      type: 'string',
      initialValue: 'Premium Experiences',
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Подзаголовок Секции',
      type: 'string',
    }),
    defineField({
      name: 'events',
      title: 'События',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'sideEvent' }],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Секция Дополнительных Событий',
        subtitle: 'Premium Experiences',
      }
    },
  },
})
