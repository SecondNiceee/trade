import type { StructureResolver } from 'sanity/structure'
import { Settings, Home, User, Calendar, Ticket, Building2, Star, MapPin } from 'lucide-react'

// Define singleton document IDs
const singletonTypes = new Set([
  'heroSettings',
  'siteSettings',
  'whyUzbekistanSettings',
  'ticketsSection',
  'speakersSection',
  'agendaSection',
  'partnersSection',
  'sideEventsSection',
])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Контент')
    .items([
      // Global Settings
      S.listItem()
        .title('Глобальные Настройки')
        .icon(Settings)
        .child(
          S.list()
            .title('Настройки')
            .items([
              S.listItem()
                .title('Настройки Сайта')
                .icon(Settings)
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
            ])
        ),
      S.divider(),
      // Sections - each section has its own settings + content
      S.listItem()
        .title('Hero Секция')
        .icon(Home)
        .child(
          S.document()
            .schemaType('heroSettings')
            .documentId('heroSettings')
        ),
      S.listItem()
        .title('Why Uzbekistan')
        .icon(MapPin)
        .child(
          S.document()
            .schemaType('whyUzbekistanSettings')
            .documentId('whyUzbekistanSettings')
        ),
      S.listItem()
        .title('Секция Спикеров')
        .icon(User)
        .child(
          S.list()
            .title('Спикеры')
            .items([
              S.listItem()
                .title('Настройки Секции')
                .icon(Settings)
                .child(
                  S.document()
                    .schemaType('speakersSection')
                    .documentId('speakersSection')
                ),
              S.divider(),
              S.listItem()
                .title('Все Спикеры')
                .icon(User)
                .schemaType('speaker')
                .child(S.documentTypeList('speaker').title('Спикеры')),
            ])
        ),
      S.listItem()
        .title('Секция Программы')
        .icon(Calendar)
        .child(
          S.list()
            .title('Программа')
            .items([
              S.listItem()
                .title('Настройки Секции')
                .icon(Settings)
                .child(
                  S.document()
                    .schemaType('agendaSection')
                    .documentId('agendaSection')
                ),
              S.divider(),
              S.listItem()
                .title('Дни Программы')
                .icon(Calendar)
                .schemaType('agendaDay')
                .child(S.documentTypeList('agendaDay').title('Дни')),
            ])
        ),
      S.listItem()
        .title('Секция Билетов')
        .icon(Ticket)
        .child(
          S.document()
            .schemaType('ticketsSection')
            .documentId('ticketsSection')
        ),
      S.listItem()
        .title('Секция Партнеров')
        .icon(Building2)
        .child(
          S.list()
            .title('Партнеры')
            .items([
              S.listItem()
                .title('Настройки Секции')
                .icon(Settings)
                .child(
                  S.document()
                    .schemaType('partnersSection')
                    .documentId('partnersSection')
                ),
              S.divider(),
              S.listItem()
                .title('Все Партнеры')
                .icon(Building2)
                .schemaType('partner')
                .child(S.documentTypeList('partner').title('Партнеры')),
            ])
        ),
      S.listItem()
        .title('Секция Premium Events')
        .icon(Star)
        .child(
          S.list()
            .title('Premium Events')
            .items([
              S.listItem()
                .title('Настройки Секции')
                .icon(Settings)
                .child(
                  S.document()
                    .schemaType('sideEventsSection')
                    .documentId('sideEventsSection')
                ),
              S.divider(),
              S.listItem()
                .title('Все События')
                .icon(Star)
                .schemaType('sideEvent')
                .child(S.documentTypeList('sideEvent').title('События')),
            ])
        ),
    ])
