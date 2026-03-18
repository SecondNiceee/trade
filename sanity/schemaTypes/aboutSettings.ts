import { defineField, defineType, defineArrayMember } from 'sanity'
import { Info } from 'lucide-react'

export const aboutSettings = defineType({
  name: 'aboutSettings',
  title: 'Настройки О Форуме',
  type: 'document',
  icon: Info,
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Метка Секции',
      type: 'string',
      initialValue: 'About the Forum',
    }),
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'The Premier Business Event of Central Asia',
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'keyPoints',
      title: 'Ключевые Пункты',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Иконка',
              type: 'string',
              options: {
                list: [
                  { title: 'Земля', value: 'globe' },
                  { title: 'Люди', value: 'users' },
                  { title: 'Лампочка', value: 'lightbulb' },
                ],
              },
            }),
            defineField({
              name: 'title',
              title: 'Заголовок',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Описание',
              type: 'text',
              rows: 2,
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'whyTashkentTitle',
      title: 'Заголовок "Почему Ташкент"',
      type: 'string',
    }),
    defineField({
      name: 'whyTashkentDescription',
      title: 'Описание "Почему Ташкент"',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'whyTashkentPoints',
      title: 'Пункты "Почему Ташкент"',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Настройки О Форуме',
        subtitle: 'Конфигурация секции о форуме',
      }
    },
  },
})
