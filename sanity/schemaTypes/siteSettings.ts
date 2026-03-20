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
      name: 'speakersSectionLabel',
      title: 'Лейбл Секции Спикеров (мелкий текст сверху)',
      type: 'string',
      initialValue: 'Featured Speakers',
    }),
    defineField({
      name: 'speakersSectionTitle',
      title: 'Заголовок Секции Спикеров',
      type: 'string',
      initialValue: 'World-Class Thought Leaders',
    }),
    defineField({
      name: 'speakersSectionSubtitle',
      title: 'Подзаголовок Секции Спикеров',
      type: 'string',
    }),
    defineField({
      name: 'speakerCategories',
      title: 'Категории Спикеров',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      initialValue: ['Technology', 'Finance', 'Government', 'Sustainability'],
    }),
    defineField({
      name: 'agendaSectionTitle',
      title: 'Заголовок Секции Программы',
      type: 'string',
      initialValue: 'Two Days of Insights',
    }),
    defineField({
      name: 'agendaSectionSubtitle',
      title: 'Подзаголовок Секции Программы',
      type: 'string',
    }),
    defineField({
      name: 'ticketsSectionTitle',
      title: 'Заголовок Секции Билетов',
      type: 'string',
      initialValue: 'Choose Your Experience',
    }),
    defineField({
      name: 'ticketsSectionSubtitle',
      title: 'Подзаголовок Секции Билетов',
      type: 'string',
    }),
    defineField({
      name: 'partnersSectionTitle',
      title: 'Заголовок Секции Партнеров',
      type: 'string',
      initialValue: 'Trusted by Industry Leaders',
    }),
    defineField({
      name: 'partnersSectionSubtitle',
      title: 'Подзаголовок Секции Партнеров',
      type: 'string',
    }),
    defineField({
      name: 'sideEventsSectionTitle',
      title: 'Заголовок Секции Дополнительных События',
      type: 'string',
      initialValue: 'Premium Experiences',
    }),
    defineField({
      name: 'sideEventsSectionSubtitle',
      title: 'Подзаголовок Секции Дополнительных События',
      type: 'string',
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
