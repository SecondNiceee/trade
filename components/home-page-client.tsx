"use client"

import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WhyUzbekistanSection } from "@/components/why-uzbekistan-section"
import { SpeakersSection } from "@/components/speakers-section"
import { AgendaSection } from "@/components/agenda-section"
import { SideEventsSection } from "@/components/side-events-section"
import { PartnersSection } from "@/components/partners-section"
import { TicketsSection } from "@/components/tickets-section"
import { ContactSection } from "@/components/contact-section"
import { MediaSection } from "@/components/media-section"
import { SiteFooter } from "@/components/site-footer"
import type { PageData } from "@/sanity/lib/types"

interface HomePageClientProps {
  data: PageData
}

export function HomePageClient({ data }: HomePageClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <HeroSection data={data.heroSettings} />
      <WhyUzbekistanSection data={data.whyUzbekistanSettings} />
      <SpeakersSection 
        speakers={data.speakersSection?.speakers || data.speakers} 
        settings={data.siteSettings}
        sectionSettings={data.speakersSection}
      />
      <AgendaSection 
        days={data.agendaDays} 
        settings={data.siteSettings} 
      />
      <SideEventsSection 
        events={data.sideEvents} 
        settings={data.siteSettings} 
      />
      <PartnersSection 
        partners={data.partners} 
        settings={data.siteSettings} 
      />
      <TicketsSection 
        tickets={data.tickets} 
        settings={data.siteSettings}
        sectionSettings={data.ticketsSection}
      />
      <ContactSection />
      <MediaSection />
      <SiteFooter />
    </div>
  )
}
