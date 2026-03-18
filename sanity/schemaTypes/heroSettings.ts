import { defineField, defineType } from 'sanity'
import { Home } from 'lucide-react'

export const heroSettings = defineType({
  name: 'heroSettings',
  title: 'Настройки Героя',
  type: 'document',
  icon: Home,
  fields: [
    defineField({
      name: 'badge',
      title: 'Текст Бейджа',
      type: 'string',
      description: 'Маленький текст над основным заголовком',
      initialValue: 'Silk Road Global Forum 2026',
    }),
    defineField({
      name: 'title',
      title: 'Главный Заголовок',
      type: 'string',
      initialValue: 'SILKON',
    }),
    defineField({
      name: 'year',
      title: 'Год',
      type: 'string',
      initialValue: '2026',
    }),
    defineField({
      name: 'tagline',
      title: 'Слоган',
      type: 'string',
      initialValue: 'Where Innovation Meets Tradition Along the New Silk Road',
    }),
    defineField({
      name: 'eventDate',
      title: 'Дата События',
      type: 'string',
      initialValue: 'October 15–16, 2026',
    }),
    defineField({
      name: 'eventLocation',
      title: 'Место События',
      type: 'string',
      initialValue: 'Tashkent, Uzbekistan',
    }),
    defineField({
      name: 'ctaButtons',
      title: 'Кнопки Призыва к Действию',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Текст Кнопки',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'URL Ссылки',
              type: 'string',
            }),
            defineField({
              name: 'primary',
              title: 'Основной Стиль',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Настройки Героя',
        subtitle: 'Конфигурация главного баннера',
      }
    },
  },
})
