import { defineField, defineType, defineArrayMember } from 'sanity'
import { Calendar } from 'lucide-react'

export const agendaDay = defineType({
  name: 'agendaDay',
  title: 'День Программы',
  type: 'document',
  icon: Calendar,
  fields: [
    defineField({
      name: 'label',
      title: 'Метка (например День 1)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Дата',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateDisplay',
      title: 'Текст для Отображения Даты',
      type: 'string',
      description: 'например "15 октября 2026"',
    }),
    defineField({
      name: 'sessions',
      title: 'Сессии',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'session',
          fields: [
            defineField({
              name: 'time',
              title: 'Время',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Заголовок',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'speaker',
              title: 'Спикер / Описание',
              type: 'string',
            }),
            defineField({
              name: 'location',
              title: 'Место',
              type: 'string',
            }),
            defineField({
              name: 'type',
              title: 'Тип Сессии',
              type: 'string',
              options: {
                list: [
                  { title: 'Основной доклад', value: 'keynote' },
                  { title: 'Панельная дискуссия', value: 'panel' },
                  { title: 'Мастер-класс', value: 'workshop' },
                  { title: 'Демонстрация', value: 'showcase' },
                  { title: 'Нетворкинг', value: 'networking' },
                  { title: 'Перерыв', value: 'break' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              time: 'time',
              type: 'type',
            },
            prepare({ title, time, type }) {
              return {
                title: title,
                subtitle: `${time} - ${type}`,
              }
            },
          },
        }),
      ],
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
      title: 'label',
      subtitle: 'dateDisplay',
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
