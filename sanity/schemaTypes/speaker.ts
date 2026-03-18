import { defineField, defineType } from 'sanity'
import { User } from 'lucide-react'

export const speaker = defineType({
  name: 'speaker',
  title: 'Спикер',
  type: 'document',
  icon: User,
  fields: [
    defineField({
      name: 'name',
      title: 'Имя',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Должность / Позиция',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'string',
      options: {
        list: [
          { title: 'Технология', value: 'Technology' },
          { title: 'Финансы', value: 'Finance' },
          { title: 'Государство', value: 'Government' },
          { title: 'Устойчивость', value: 'Sustainability' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Фото',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkedin',
      title: 'URL LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'URL Twitter/X',
      type: 'url',
    }),
    defineField({
      name: 'bio',
      title: 'Биография',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'order',
      title: 'Порядок Отображения',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Порядок Отображения',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
