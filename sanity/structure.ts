import type { StructureResolver } from 'sanity/structure'
import { Settings, Home, Info, User, Calendar, Ticket, Building2, Star, MapPin } from 'lucide-react'

// Define singleton document IDs
const singletonTypes = new Set(['heroSettings', 'siteSettings', 'whyUzbekistanSettings'])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Settings group
      S.listItem()
        .title('Settings')
        .icon(Settings)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Site Settings')
                .icon(Settings)
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
              S.listItem()
                .title('Hero Settings')
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
            ])
        ),
      S.divider(),
      // Content sections
      S.listItem()
        .title('Speakers')
        .icon(User)
        .schemaType('speaker')
        .child(S.documentTypeList('speaker').title('Speakers')),
      S.listItem()
        .title('Agenda')
        .icon(Calendar)
        .schemaType('agendaDay')
        .child(S.documentTypeList('agendaDay').title('Agenda Days')),
      S.listItem()
        .title('Tickets')
        .icon(Ticket)
        .schemaType('ticket')
        .child(S.documentTypeList('ticket').title('Tickets')),
      S.listItem()
        .title('Partners')
        .icon(Building2)
        .schemaType('partner')
        .child(S.documentTypeList('partner').title('Partners')),
      S.listItem()
        .title('Side Events')
        .icon(Star)
        .schemaType('sideEvent')
        .child(S.documentTypeList('sideEvent').title('Side Events')),
    ])
