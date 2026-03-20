import type { Image } from 'sanity'

export interface HeroSettings {
  badge?: string
  title?: string
  year?: string
  tagline?: string
  eventDate?: string
  eventLocation?: string
  ctaButtons?: {
    label?: string
    href?: string
    primary?: boolean
  }[]
}

export interface AboutKeyPoint {
  icon?: 'globe' | 'users' | 'lightbulb'
  title?: string
  description?: string
}

export interface SiteSettings {
  siteTitle?: string
  siteDescription?: string
  contactEmail?: string
  socialLinks?: {
    twitter?: string
    linkedin?: string
    instagram?: string
    telegram?: string
  }
}

export interface Speaker {
  _id: string
  name: string
  role: string
  category: string
  image?: Image
  linkedin?: string
  twitter?: string
  bio?: string
}

export interface AgendaSession {
  time: string
  title: string
  speaker?: string
  location?: string
  type: 'keynote' | 'panel' | 'workshop' | 'showcase' | 'networking' | 'break'
}

export interface AgendaDay {
  _id: string
  label: string
  date: string
  dateDisplay?: string
  sessions: AgendaSession[]
}

export interface Ticket {
  _id: string
  name: string
  price: string
  description?: string
  features?: string[]
  popular?: boolean
}

export interface Partner {
  _id: string
  name: string
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Media Partners'
  logo?: Image
  website?: string
}

export interface SideEvent {
  _id: string
  title: string
  description?: string
  date?: string
  tag?: string
  icon?: 'crown' | 'wine' | 'briefcase' | 'star'
  colorTheme?: 'amber' | 'rose' | 'blue' | 'emerald'
}

export interface WhyUzbekistanStat {
  value?: number
  suffix?: string
  label?: string
  icon?: 'trending-up' | 'users' | 'building' | 'plane' | 'globe' | 'star'
}

export interface WhyUzbekistanSettings {
  sectionLabel?: string
  title?: string
  description?: string
  stats?: WhyUzbekistanStat[]
  gatewayTitle?: string
  gatewayDescription?: string
  gatewayPoints?: string[]
}

// Section Settings Types
export interface TicketItem {
  _key: string
  name: string
  price: string
  description?: string
  features?: string[]
  popular?: boolean
}

export interface TicketsSection {
  sectionTitle?: string
  sectionSubtitle?: string
  paymentMethodCard?: string
  paymentMethodBank?: string
  paymentMethodCrypto?: string
  paymentSecureText?: string
  tickets?: TicketItem[]
}

export interface SpeakersSection {
  sectionLabel?: string
  sectionTitle?: string
  sectionSubtitle?: string
  categories?: string[]
  speakers?: Speaker[]
}

export interface AgendaSection {
  sectionTitle?: string
  sectionSubtitle?: string
  days?: AgendaDay[]
}

export interface PartnersSection {
  sectionTitle?: string
  sectionSubtitle?: string
  partners?: Partner[]
}

export interface SideEventsSection {
  sectionTitle?: string
  sectionSubtitle?: string
  events?: SideEvent[]
}

export interface ContactSection {
  sectionLabel?: string
  sectionTitle?: string
  sectionSubtitle?: string
  speakerFormTitle?: string
  speakerFormDescription?: string
  sponsorFormTitle?: string
  sponsorFormDescription?: string
}

export interface PageData {
  heroSettings: HeroSettings | null
  siteSettings: SiteSettings | null
  whyUzbekistanSettings: WhyUzbekistanSettings | null
  ticketsSection: TicketsSection | null
  speakersSection: SpeakersSection | null
  agendaSection: AgendaSection | null
  partnersSection: PartnersSection | null
  sideEventsSection: SideEventsSection | null
  contactSection: ContactSection | null
  // Legacy - for backwards compatibility
  speakers: Speaker[]
  agendaDays: AgendaDay[]
  tickets: Ticket[]
  partners: Partner[]
  sideEvents: SideEvent[]
}
