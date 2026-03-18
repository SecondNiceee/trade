import { defineField, defineType } from 'sanity'
import { MapPin } from 'lucide-react'

export const whyUzbekistanSettings = defineType({
  name: 'whyUzbekistanSettings',
  title: 'Секция "Почему Узбекистан"',
  type: 'document',
  icon: MapPin,
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Метка Секции',
      type: 'string',
      initialValue: 'Why Uzbekistan',
    }),
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'The Heart of Central Asia',
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 3,
      initialValue: 'Strategically positioned at the crossroads of ancient trade routes, Uzbekistan offers unparalleled access to markets spanning Europe, Asia, and the Middle East.',
    }),
    defineField({
      name: 'stats',
      title: 'Статистика',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Значение (число)',
              type: 'number',
              description: 'Например: 7.6',
            }),
            defineField({
              name: 'suffix',
              title: 'Суффикс',
              type: 'string',
              description: 'Например: % или M+ или +',
            }),
            defineField({
              name: 'label',
              title: 'Подпись',
              type: 'string',
              description: 'Например: GDP Growth Rate',
            }),
            defineField({
              name: 'icon',
              title: 'Иконка',
              type: 'string',
              options: {
                list: [
                  { title: 'График (TrendingUp)', value: 'trending-up' },
                  { title: 'Люди (Users)', value: 'users' },
                  { title: 'Здание (Building)', value: 'building' },
                  { title: 'Самолёт (Plane)', value: 'plane' },
                  { title: 'Глобус (Globe)', value: 'globe' },
                  { title: 'Звезда (Star)', value: 'star' },
                ],
                layout: 'radio',
              },
              initialValue: 'trending-up',
            }),
          ],
          preview: {
            select: {
              value: 'value',
              suffix: 'suffix',
              label: 'label',
            },
            prepare({ value, suffix, label }) {
              return {
                title: `${value}${suffix}`,
                subtitle: label,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'gatewayTitle',
      title: 'Заголовок Блока "Gateway"',
      type: 'string',
      initialValue: 'A Gateway to 3 Billion Consumers',
    }),
    defineField({
      name: 'gatewayDescription',
      title: 'Описание Блока "Gateway"',
      type: 'text',
      rows: 3,
      initialValue: "Uzbekistan's strategic location provides direct access to the CIS, South Asia, and emerging markets. The country's ambitious reform agenda has created one of the most business-friendly environments in the region.",
    }),
    defineField({
      name: 'gatewayPoints',
      title: 'Пункты Преимуществ',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Free economic zones with tax incentives',
        'Simplified visa regime for 90+ countries',
        'Modern infrastructure and logistics hubs',
        'Rapidly growing digital economy',
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Секция "Почему Узбекистан"',
        subtitle: 'Статистика и описание страны',
      }
    },
  },
})
