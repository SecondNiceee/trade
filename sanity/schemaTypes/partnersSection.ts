import { defineField, defineType, defineArrayMember } from 'sanity'
import { Building2 } from 'lucide-react'

export const partnersSection = defineType({
  name: 'partnersSection',
  title: 'Секция Партнеров',
  type: 'document',
  icon: Building2,
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Заголовок Секции',
      type: 'string',
      initialValue: 'Trusted by Industry Leaders',
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Подзаголовок Секции',
      type: 'string',
    }),
    defineField({
      name: 'partners',
      title: 'Партнеры',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'partner' }],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Секция Партнеров',
        subtitle: 'Настройки и партнеры',
      }
    },
  },
})
