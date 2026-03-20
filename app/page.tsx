import { sanityFetch } from "@/sanity/lib/client"
import { pageDataQuery } from "@/sanity/lib/queries"
import type { PageData } from "@/sanity/lib/types"
import { HomePageClient } from "@/components/home-page-client"

// Default data for when Sanity is empty or not connected
const defaultData: PageData = {
  whyUzbekistanSettings: {
    sectionLabel: 'Why Uzbekistan',
    title: 'The Heart of Central Asia',
    description: 'Strategically positioned at the crossroads of ancient trade routes, Uzbekistan offers unparalleled access to markets spanning Europe, Asia, and the Middle East.',
    stats: [
      { icon: 'trending-up', value: 7.6, suffix: '%', label: 'GDP Growth Rate' },
      { icon: 'users', value: 38, suffix: 'M+', label: 'Population' },
      { icon: 'building', value: 15000, suffix: '+', label: 'Foreign Companies' },
      { icon: 'plane', value: 50, suffix: '+', label: 'Direct Flight Routes' },
      { icon: 'globe', value: 35, suffix: '', label: 'Visa Free Directions' },
    ],
    gatewayTitle: 'A Gateway to 3 Billion Consumers',
    gatewayDescription: "Uzbekistan's strategic location provides direct access to the CIS, South Asia, and emerging markets. The country's ambitious reform agenda has created one of the most business-friendly environments in the region.",
    gatewayPoints: [
      'Free economic zones with tax incentives',
      'Simplified visa regime for 90+ countries',
      'Modern infrastructure and logistics hubs',
      'Rapidly growing digital economy',
    ],
  },
  heroSettings: {
    badge: "Silk Road Global Forum 2026",
    title: "SILKON",
    year: "2026",
    tagline: "Where Innovation Meets Tradition Along the New Silk Road",
    eventDate: "October 15–16, 2026",
    eventLocation: "Tashkent, Uzbekistan",
    ctaButtons: [
      { label: "Get Tickets", href: "#tickets", primary: true },
      { label: "Become a Speaker", href: "#contact", primary: false },
      { label: "Become a Partner", href: "#partners", primary: false },
    ],
  },
  siteSettings: {
    siteTitle: "SILKON 2026",
    speakersSectionTitle: "World-Class Thought Leaders",
    speakersSectionSubtitle: "Learn from industry pioneers and visionaries shaping the future of global business.",
    speakerCategories: ["Technology", "Finance", "Government", "Sustainability"],
    agendaSectionTitle: "Two Days of Insights",
    agendaSectionSubtitle: "Packed with keynotes, panels, workshops, and networking opportunities.",
    ticketsSectionTitle: "Choose Your Experience",
    ticketsSectionSubtitle: "Early bird pricing available until August 31, 2026. Group discounts available for 5+ tickets.",
    partnersSectionTitle: "Trusted by Industry Leaders",
    partnersSectionSubtitle: "Join our network of prestigious partners driving innovation across the Silk Road region.",
    sideEventsSectionTitle: "Premium Experiences",
    sideEventsSectionSubtitle: "Exclusive gatherings and curated experiences for our distinguished guests.",
  },
  speakers: [
    { _id: "1", name: "Dr. Sarah Chen", role: "CEO, FutureTech Global", category: "Technology" },
    { _id: "2", name: "Alexander Volkov", role: "Minister of Digital Economy", category: "Government" },
    { _id: "3", name: "Maria Rodriguez", role: "Partner, Silk Road Ventures", category: "Finance" },
    { _id: "4", name: "James Mitchell", role: "Founder, GreenPath Initiative", category: "Sustainability" },
    { _id: "5", name: "Fatima Al-Hassan", role: "CTO, DataBridge Systems", category: "Technology" },
    { _id: "6", name: "Viktor Petrov", role: "Chairman, Eurasian Bank", category: "Finance" },
    { _id: "7", name: "Liu Wei", role: "Director, Belt & Road Institute", category: "Government" },
    { _id: "8", name: "Anna Bergstrom", role: "Head of ESG, Nordic Capital", category: "Sustainability" },
  ],
  agendaDays: [
    {
      _id: "day1",
      label: "Day 1",
      date: "2026-10-15",
      dateDisplay: "October 15, 2026",
      sessions: [
        { time: "09:00", title: "Opening Ceremony", speaker: "Official Welcome & Keynote Address", location: "Main Hall", type: "keynote" },
        { time: "10:30", title: "The Future of Digital Trade", speaker: "Dr. Sarah Chen, FutureTech Global", location: "Main Hall", type: "panel" },
        { time: "12:00", title: "Networking Lunch", speaker: "Connect with fellow attendees", location: "Grand Foyer", type: "break" },
        { time: "14:00", title: "Sustainable Finance in Emerging Markets", speaker: "Anna Bergstrom, Nordic Capital", location: "Conference Room A", type: "workshop" },
        { time: "15:30", title: "Tech Innovation Showcase", speaker: "Startup Pitch Competition", location: "Innovation Hub", type: "showcase" },
        { time: "17:00", title: "Government-Business Dialogue", speaker: "Minister Alexander Volkov & Panel", location: "Main Hall", type: "panel" },
        { time: "19:00", title: "Gala Dinner", speaker: "Evening reception with entertainment", location: "Silk Road Ballroom", type: "networking" },
      ],
    },
    {
      _id: "day2",
      label: "Day 2",
      date: "2026-10-16",
      dateDisplay: "October 16, 2026",
      sessions: [
        { time: "09:00", title: "Morning Keynote: Belt & Road 2.0", speaker: "Liu Wei, Belt & Road Institute", location: "Main Hall", type: "keynote" },
        { time: "10:30", title: "Investment Opportunities in Central Asia", speaker: "Viktor Petrov & Regional Leaders", location: "Main Hall", type: "panel" },
        { time: "12:00", title: "Business Lunch & B2B Meetings", speaker: "Pre-scheduled meetings", location: "Meeting Rooms", type: "break" },
        { time: "14:00", title: "AI & The New Silk Road Economy", speaker: "Fatima Al-Hassan, DataBridge Systems", location: "Conference Room B", type: "workshop" },
        { time: "15:30", title: "Green Energy Transition", speaker: "James Mitchell, GreenPath Initiative", location: "Conference Room A", type: "workshop" },
        { time: "17:00", title: "Closing Ceremony & Awards", speaker: "Partnership announcements & recognition", location: "Main Hall", type: "keynote" },
      ],
    },
  ],
  tickets: [
    { _id: "1", name: "Standard", price: "$499", description: "Essential access for professionals", features: ["Main stage access", "Networking sessions", "Coffee breaks & lunch", "Event materials", "Certificate of attendance"], popular: false },
    { _id: "2", name: "Business", price: "$999", description: "Enhanced experience for serious networkers", features: ["All Standard benefits", "VIP seating areas", "B2B matchmaking sessions", "Workshop access", "Gala dinner invitation", "Priority registration"], popular: true },
    { _id: "3", name: "Executive", price: "$2,499", description: "Premium access for industry leaders", features: ["All Business benefits", "VIP Leadership Summit", "Private meeting rooms", "Dedicated concierge", "Airport transfers", "Exclusive networking dinner", "1-year SILKON membership"], popular: false },
  ],
  partners: [
    { _id: "1", name: "GlobalTech Inc", tier: "Platinum" },
    { _id: "2", name: "Silk Road Bank", tier: "Platinum" },
    { _id: "3", name: "EuroAsia Holdings", tier: "Platinum" },
    { _id: "4", name: "TechVentures", tier: "Gold" },
    { _id: "5", name: "Central Trade Co", tier: "Gold" },
    { _id: "6", name: "Digital Bridge", tier: "Gold" },
    { _id: "7", name: "Innovation Labs", tier: "Gold" },
    { _id: "8", name: "StartupHub", tier: "Silver" },
    { _id: "9", name: "Green Energy Corp", tier: "Silver" },
    { _id: "10", name: "DataFlow", tier: "Silver" },
    { _id: "11", name: "ConnectAsia", tier: "Silver" },
    { _id: "12", name: "FutureWorks", tier: "Silver" },
    { _id: "13", name: "Business Weekly", tier: "Media Partners" },
    { _id: "14", name: "Tech Today", tier: "Media Partners" },
    { _id: "15", name: "Asia Finance", tier: "Media Partners" },
    { _id: "16", name: "Global News Network", tier: "Media Partners" },
  ],
  sideEvents: [
    { _id: "1", title: "VIP Leadership Summit", description: "Exclusive roundtable with C-suite executives and government ministers. By invitation only.", date: "October 14, 2026", tag: "Exclusive", icon: "crown", colorTheme: "amber" },
    { _id: "2", title: "Silk Road Gala Dinner", description: "An evening of fine dining, traditional Uzbek cuisine, and live entertainment at the historic palace.", date: "October 15, 2026", tag: "Premium", icon: "wine", colorTheme: "rose" },
    { _id: "3", title: "Investor Matchmaking", description: "Pre-scheduled 1-on-1 meetings between startups and venture capital firms from across the region.", date: "October 15-16, 2026", tag: "Business", icon: "briefcase", colorTheme: "blue" },
    { _id: "4", title: "Cultural Heritage Tour", description: "Guided tour of Tashkent's historic sites, including the ancient Silk Road caravanserais.", date: "October 17, 2026", tag: "Experience", icon: "star", colorTheme: "emerald" },
  ],
  // Section settings (new structure)
  ticketsSection: null,
  speakersSection: null,
  agendaSection: null,
  partnersSection: null,
  sideEventsSection: null,
}

export default async function HomePage() {
  let data: PageData = defaultData

  try {
    const sanityData = await sanityFetch<PageData>({
      query: pageDataQuery,
    })
    
    // Merge Sanity data with defaults (use Sanity if available, else default)
    data = {
      heroSettings: sanityData.heroSettings || defaultData.heroSettings,
      siteSettings: sanityData.siteSettings || defaultData.siteSettings,
      whyUzbekistanSettings: sanityData.whyUzbekistanSettings || defaultData.whyUzbekistanSettings,
      speakers: sanityData.speakers?.length ? sanityData.speakers : defaultData.speakers,
      agendaDays: sanityData.agendaDays?.length ? sanityData.agendaDays : defaultData.agendaDays,
      tickets: sanityData.tickets?.length ? sanityData.tickets : defaultData.tickets,
      partners: sanityData.partners?.length ? sanityData.partners : defaultData.partners,
      sideEvents: sanityData.sideEvents?.length ? sanityData.sideEvents : defaultData.sideEvents,
      // Section settings
      ticketsSection: sanityData.ticketsSection || null,
      speakersSection: sanityData.speakersSection || null,
      agendaSection: sanityData.agendaSection || null,
      partnersSection: sanityData.partnersSection || null,
      sideEventsSection: sanityData.sideEventsSection || null,
    }
  } catch (error) {
    console.log('[v0] Sanity fetch failed, using default data:', error)
  }

  return <HomePageClient data={data} />
}
