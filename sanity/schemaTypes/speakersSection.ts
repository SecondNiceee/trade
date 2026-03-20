import { defineField, defineType, defineArrayMember } from 'sanity'
import { User } from 'lucide-react'

export const speakersSection = defineType({
  name: 'speakersSection',
  title: 'Секция Спикеров',
  type: 'document',
  icon: User,
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Заголовок Секции',
      type: 'string',
      initialValue: 'World-Class Thought Leaders',
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Подзаголовок Секции',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title: 'Категории Спикеров',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      initialValue: ['Technology', 'Finance', 'Government', 'Sustainability'],
    }),
    defineField({
      name: 'speakers',
      title: 'Спикеры',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'speaker' }],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Секция Спикеров',
        subtitle: 'Настройки и спикеры',
      }
    },
  },
})
