import { defineField, defineType, defineArrayMember } from 'sanity'
import { Settings } from 'lucide-react'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Настройки Сайта',
  type: 'document',
  icon: Settings,
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Заголовок Сайта',
      type: 'string',
      initialValue: 'SILKON 2026',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Описание Сайта (SEO)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'contactEmail',
      title: 'Email Контакта',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Ссылки на Социальные Сети',
      type: 'object',
      fields: [
        defineField({ name: 'twitter', title: 'Twitter/X', type: 'url' }),
        defineField({ name: 'linkedin', title: 'LinkedIn', type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram', type: 'url' }),
        defineField({ name: 'telegram', title: 'Telegram', type: 'url' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Настройки Сайта',
        subtitle: 'Глобальная конфигурация сайта',
      }
    },
  },
})
