import { defineField, defineType, defineArrayMember } from 'sanity'
import { Ticket } from 'lucide-react'

export const ticket = defineType({
  name: 'ticket',
  title: 'Билет',
  type: 'document',
  icon: Ticket,
  fields: [
    defineField({
      name: 'name',
      title: 'Название Билета',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Цена',
      type: 'string',
      description: 'например "$499"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Особенности',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'popular',
      title: 'Самый Популярный',
      type: 'boolean',
      initialValue: false,
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
      subtitle: 'price',
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
