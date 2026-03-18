import { type SchemaTypeDefinition } from 'sanity'

import { speaker } from './speaker'
import { agendaDay } from './agendaDay'
import { ticket } from './ticket'
import { partner } from './partner'
import { sideEvent } from './sideEvent'
import { heroSettings } from './heroSettings'
import { siteSettings } from './siteSettings'
import { whyUzbekistanSettings } from './whyUzbekistanSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    speaker,
    agendaDay,
    ticket,
    partner,
    sideEvent,
    // Singletons
    heroSettings,
    siteSettings,
    whyUzbekistanSettings,
  ],
}
