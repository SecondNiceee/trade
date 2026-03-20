import { defineField, defineType, defineArrayMember } from 'sanity'
import { Calendar } from 'lucide-react'

export const agendaSection = defineType({
  name: 'agendaSection',
  title: 'Секция Программы',
  type: 'document',
  icon: Calendar,
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Заголовок Секции',
      type: 'string',
      initialValue: 'Two Days of Insights',
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Подзаголовок Секции',
      type: 'string',
    }),
    defineField({
      name: 'days',
      title: 'Дни Программы',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'agendaDay' }],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Секция Программы',
        subtitle: 'Настройки и программа',
      }
    },
  },
})
