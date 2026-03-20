import { defineField, defineType } from 'sanity'
import { Mail } from 'lucide-react'

export const contactSection = defineType({
  name: 'contactSection',
  title: 'Секция Контакт',
  type: 'document',
  icon: Mail,
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Лейбл (мелкий текст сверху)',
      type: 'string',
      initialValue: 'Get Involved',
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Заголовок Секции',
      type: 'string',
      initialValue: 'Join SILKON 2026',
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Подзаголовок Секции',
      type: 'string',
      initialValue: 'Become a speaker or sponsor and connect with thousands of decision-makers from across the globe.',
    }),
    defineField({
      name: 'speakerFormTitle',
      title: 'Заголовок формы спикера',
      type: 'string',
      initialValue: 'Speaker Application',
    }),
    defineField({
      name: 'speakerFormDescription',
      title: 'Описание формы спикера',
      type: 'string',
      initialValue: "Share your expertise with global business leaders. We're looking for innovative thinkers in technology, finance, sustainability, and international trade.",
    }),
    defineField({
      name: 'sponsorFormTitle',
      title: 'Заголовок формы спонсора',
      type: 'string',
      initialValue: 'Sponsorship Inquiry',
    }),
    defineField({
      name: 'sponsorFormDescription',
      title: 'Описание формы спонсора',
      type: 'string',
      initialValue: 'Maximize your brand visibility and connect with 5,000+ decision-makers. Packages range from $10,000 to custom enterprise solutions.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Секция Контакт',
        subtitle: 'Join SILKON 2026',
      }
    },
  },
})
