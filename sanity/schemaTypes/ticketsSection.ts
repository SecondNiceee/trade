import { defineField, defineType, defineArrayMember } from 'sanity'
import { Ticket } from 'lucide-react'

export const ticketsSection = defineType({
  name: 'ticketsSection',
  title: 'Секция Билетов',
  type: 'document',
  icon: Ticket,
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Заголовок Секции',
      type: 'string',
      initialValue: 'Choose Your Experience',
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Подзаголовок Секции',
      type: 'string',
    }),
    defineField({
      name: 'tickets',
      title: 'Билеты',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'ticket',
          title: 'Билет',
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
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'price',
              popular: 'popular',
            },
            prepare({ title, subtitle, popular }) {
              return {
                title: popular ? `⭐ ${title}` : title,
                subtitle,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Секция Билетов',
        subtitle: 'Настройки и билеты',
      }
    },
  },
})
