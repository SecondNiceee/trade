import { type SchemaTypeDefinition } from 'sanity'

import { speaker } from './speaker'
import { agendaDay } from './agendaDay'
import { ticket } from './ticket'
import { partner } from './partner'
import { sideEvent } from './sideEvent'
import { heroSettings } from './heroSettings'
import { siteSettings } from './siteSettings'
import { whyUzbekistanSettings } from './whyUzbekistanSettings'
// Section settings
import { ticketsSection } from './ticketsSection'
import { speakersSection } from './speakersSection'
import { agendaSection } from './agendaSection'
import { partnersSection } from './partnersSection'
import { sideEventsSection } from './sideEventsSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents (for references)
    speaker,
    agendaDay,
    ticket,
    partner,
    sideEvent,
    // Singletons - Global
    heroSettings,
    siteSettings,
    whyUzbekistanSettings,
    // Singletons - Sections
    ticketsSection,
    speakersSection,
    agendaSection,
    partnersSection,
    sideEventsSection,
  ],
}
