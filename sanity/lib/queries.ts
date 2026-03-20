import { groq } from 'next-sanity'

// Hero Settings
export const heroSettingsQuery = groq`*[_type == "heroSettings"][0]{
  badge,
  title,
  year,
  tagline,
  eventDate,
  eventLocation,
  ctaButtons
}`

// Why Uzbekistan Settings
export const whyUzbekistanSettingsQuery = groq`*[_type == "whyUzbekistanSettings"][0]{
  sectionLabel,
  title,
  description,
  stats,
  gatewayTitle,
  gatewayDescription,
  gatewayPoints
}`

// Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteTitle,
  siteDescription,
  speakersSectionTitle,
  speakersSectionSubtitle,
  speakerCategories,
  agendaSectionTitle,
  agendaSectionSubtitle,
  ticketsSectionTitle,
  ticketsSectionSubtitle,
  partnersSectionTitle,
  partnersSectionSubtitle,
  sideEventsSectionTitle,
  sideEventsSectionSubtitle,
  contactEmail,
  socialLinks
}`

// Speakers
export const speakersQuery = groq`*[_type == "speaker"] | order(order asc){
  _id,
  name,
  role,
  category,
  image,
  linkedin,
  twitter,
  bio
}`

// Agenda Days
export const agendaDaysQuery = groq`*[_type == "agendaDay"] | order(order asc){
  _id,
  label,
  date,
  dateDisplay,
  sessions
}`

// Tickets
export const ticketsQuery = groq`*[_type == "ticket"] | order(order asc){
  _id,
  name,
  price,
  description,
  features,
  popular
}`

// Partners
export const partnersQuery = groq`*[_type == "partner"] | order(order asc){
  _id,
  name,
  tier,
  logo,
  website
}`

// Side Events
export const sideEventsQuery = groq`*[_type == "sideEvent"] | order(order asc){
  _id,
  title,
  description,
  date,
  tag,
  icon,
  colorTheme
}`

// Section Settings Queries
export const ticketsSectionQuery = groq`*[_type == "ticketsSection"][0]{
  sectionTitle,
  sectionSubtitle,
  tickets
}`

export const speakersSectionQuery = groq`*[_type == "speakersSection"][0]{
  sectionTitle,
  sectionSubtitle,
  categories,
  "speakers": speakers[]->{
    _id,
    name,
    role,
    category,
    image,
    linkedin,
    twitter,
    bio
  }
}`

export const agendaSectionQuery = groq`*[_type == "agendaSection"][0]{
  sectionTitle,
  sectionSubtitle,
  "days": days[]->{
    _id,
    label,
    date,
    dateDisplay,
    sessions
  }
}`

export const partnersSectionQuery = groq`*[_type == "partnersSection"][0]{
  sectionTitle,
  sectionSubtitle,
  "partners": partners[]->{
    _id,
    name,
    tier,
    logo,
    website
  }
}`

export const sideEventsSectionQuery = groq`*[_type == "sideEventsSection"][0]{
  sectionTitle,
  sectionSubtitle,
  "events": events[]->{
    _id,
    title,
    description,
    date,
    tag,
    icon,
    colorTheme
  }
}`

// All page data query (for server components)
export const pageDataQuery = groq`{
  "heroSettings": *[_type == "heroSettings"][0]{
    badge,
    title,
    year,
    tagline,
    eventDate,
    eventLocation,
    ctaButtons
  },
  "whyUzbekistanSettings": *[_type == "whyUzbekistanSettings"][0]{
    sectionLabel,
    title,
    description,
    stats,
    gatewayTitle,
    gatewayDescription,
    gatewayPoints
  },
  "siteSettings": *[_type == "siteSettings"][0]{
    siteTitle,
    siteDescription,
    speakersSectionTitle,
    speakersSectionSubtitle,
    speakerCategories,
    agendaSectionTitle,
    agendaSectionSubtitle,
    ticketsSectionTitle,
    ticketsSectionSubtitle,
    partnersSectionTitle,
    partnersSectionSubtitle,
    sideEventsSectionTitle,
    sideEventsSectionSubtitle,
    contactEmail,
    socialLinks
  },
  "ticketsSection": *[_type == "ticketsSection"][0]{
    sectionTitle,
    sectionSubtitle,
    tickets
  },
  "speakersSection": *[_type == "speakersSection"][0]{
    sectionTitle,
    sectionSubtitle,
    categories,
    "speakers": speakers[]->{
      _id,
      name,
      role,
      category,
      image,
      linkedin,
      twitter,
      bio
    }
  },
  "agendaSection": *[_type == "agendaSection"][0]{
    sectionTitle,
    sectionSubtitle,
    "days": days[]->{
      _id,
      label,
      date,
      dateDisplay,
      sessions
    }
  },
  "partnersSection": *[_type == "partnersSection"][0]{
    sectionTitle,
    sectionSubtitle,
    "partners": partners[]->{
      _id,
      name,
      tier,
      logo,
      website
    }
  },
  "sideEventsSection": *[_type == "sideEventsSection"][0]{
    sectionTitle,
    sectionSubtitle,
    "events": events[]->{
      _id,
      title,
      description,
      date,
      tag,
      icon,
      colorTheme
    }
  },
  "speakers": *[_type == "speaker"] | order(order asc){
    _id,
    name,
    role,
    category,
    image,
    linkedin,
    twitter,
    bio
  },
  "agendaDays": *[_type == "agendaDay"] | order(order asc){
    _id,
    label,
    date,
    dateDisplay,
    sessions
  },
  "tickets": *[_type == "ticket"] | order(order asc){
    _id,
    name,
    price,
    description,
    features,
    popular
  },
  "partners": *[_type == "partner"] | order(order asc){
    _id,
    name,
    tier,
    logo,
    website
  },
  "sideEvents": *[_type == "sideEvent"] | order(order asc){
    _id,
    title,
    description,
    date,
    tag,
    icon,
    colorTheme
  }
}`
