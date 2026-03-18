import { defineField, defineType } from 'sanity'
import { Building2 } from 'lucide-react'

export const partner = defineType({
  name: 'partner',
  title: 'Партнер',
  type: 'document',
  icon: Building2,
  fields: [
    defineField({
      name: 'name',
      title: 'Название Партнера',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tier',
      title: 'Уровень Партнерства',
      type: 'string',
      options: {
        list: [
          { title: 'Платина', value: 'Platinum' },
          { title: 'Золото', value: 'Gold' },
          { title: 'Серебро', value: 'Silver' },
          { title: 'Медиа-партнеры', value: 'Media Partners' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Логотип',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'website',
      title: 'URL Веб-сайта',
      type: 'url',
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
      subtitle: 'tier',
      media: 'logo',
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
