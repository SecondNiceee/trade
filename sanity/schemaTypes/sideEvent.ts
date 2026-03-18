import { defineField, defineType } from 'sanity'
import { Star } from 'lucide-react'

export const sideEvent = defineType({
  name: 'sideEvent',
  title: 'Дополнительное События',
  type: 'document',
  icon: Star,
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'date',
      title: 'Отображение Даты',
      type: 'string',
      description: 'например "14 октября 2026"',
    }),
    defineField({
      name: 'tag',
      title: 'Тег',
      type: 'string',
      description: 'например "Exclusive", "Premium", "Business"',
    }),
    defineField({
      name: 'icon',
      title: 'Иконка',
      type: 'string',
      options: {
        list: [
          { title: 'Корона', value: 'crown' },
          { title: 'Вино', value: 'wine' },
          { title: 'Портфель', value: 'briefcase' },
          { title: 'Звезда', value: 'star' },
        ],
      },
    }),
    defineField({
      name: 'colorTheme',
      title: 'Цветовая Схема',
      type: 'string',
      options: {
        list: [
          { title: 'Янтарь/Золото', value: 'amber' },
          { title: 'Роза/Розовый', value: 'rose' },
          { title: 'Синий/Голубой', value: 'blue' },
          { title: 'Изумруд/Зеленый', value: 'emerald' },
        ],
      },
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
      title: 'title',
      subtitle: 'date',
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
