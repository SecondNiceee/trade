"use client"

import { useEffect, useRef, useState } from "react"
import { Check, CreditCard, Landmark, Sparkles, Wallet } from "lucide-react"
import type { Ticket, TicketsSection as TicketsSectionType, TicketItem } from "@/sanity/lib/types"

interface TicketsSectionProps {
  tickets: Ticket[]
  sectionSettings?: TicketsSectionType | null
}

export function TicketsSection({ tickets, sectionSettings }: TicketsSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const title = sectionSettings?.sectionTitle || "Choose Your Experience"
  const subtitle = sectionSettings?.sectionSubtitle || "Early bird pricing available until August 31, 2026. Group discounts available for 5+ tickets."
  
  // Use tickets from section settings if available, otherwise use legacy tickets
  const ticketItems = sectionSettings?.tickets?.map((t, i) => ({
    ...t,
    _id: t._key || `ticket-${i}`,
  })) || tickets

  return (
    <section id="tickets" ref={sectionRef} className="relative py-12 bg-white overflow-hidden">
      {/* Premium metallic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-white to-[#fafafa]" />
      <SectionSparkles />
      
      {/* Metallic glow orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(192,192,192,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(180,180,180,0.12) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px]" style={{ background: 'radial-gradient(circle, rgba(200,200,200,0.1) 0%, transparent 60%)' }} />
      
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d0d0d0]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-gray-500 animate-pulse" />
            <span 
              className="text-sm font-semibold tracking-wider uppercase bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #808080 100%)'
              }}
            >Tickets</span>
            <Sparkles className="w-4 h-4 text-gray-500 animate-pulse" />
          </div>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 30%, #2a2a2a 70%, #1a1a1a 100%)'
            }}
          >
            {title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Ticket grid: first 3 in a row, remainder centered on next row */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {ticketItems.map((ticket, index) => (
            <div
              key={ticket._id}
              className={`group relative rounded-3xl p-8 overflow-hidden transition-all duration-500 w-full md:w-[calc(33.333%-1.5rem)] lg:w-[calc(33.333%-2rem)] flex flex-col ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${hoveredIndex === index ? "scale-[1.03]" : ""}`}
              style={{
                transitionDelay: `${index * 150 + 200}ms`,
                background: ticket.popular
                  ? 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 40%, #252525 70%, #0f0f0f 100%)'
                  : 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 25%, #f5f5f5 50%, #e0e0e0 75%, #d8d8d8 100%)',
                boxShadow: hoveredIndex === index
                  ? ticket.popular
                    ? '0 30px 70px rgba(0,0,0,0.5), 0 10px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)'
                    : '0 25px 60px rgba(150,150,150,0.35), 0 8px 20px rgba(180,180,180,0.2), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(180,180,180,0.3)'
                  : ticket.popular
                    ? '0 20px_60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)'
                    : '0 8px 30px rgba(150,150,150,0.2), 0 2px 8px rgba(180,180,180,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(180,180,180,0.2)',
                border: ticket.popular ? '1px solid rgba(80,80,80,0.6)' : '1px solid rgba(200,200,200,0.5)',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glossy sheen for all cards */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{ background: ticket.popular ? 'linear-gradient(160deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 35%, transparent 60%)' : 'linear-gradient(160deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 35%, transparent 60%)' }} />
              <div className={`absolute top-0 bottom-0 w-1/2 pointer-events-none transition-all duration-700 ${hoveredIndex === index ? 'left-full' : '-left-1/2'}`} style={{ background: ticket.popular ? 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)' : 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)' }} />
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white to-transparent" style={{ opacity: ticket.popular ? 0.2 : 1 }} />



              <div className="text-center mb-8">
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  ticket.popular 
                    ? "text-white" 
                    : hoveredIndex === index ? "text-gray-900" : "text-gray-800"
                }`}>
                  {ticket.name}
                </h3>
                <p className={`text-sm mb-4 ${ticket.popular ? "text-white/60" : "text-gray-500"}`}>{ticket.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold transition-all duration-300 ${
                    ticket.popular 
                      ? "text-white" 
                      : hoveredIndex === index ? "text-gray-900 scale-110" : "text-gray-800"
                  }`}>
                    {ticket.price}
                  </span>
                  <span className={ticket.popular ? "text-white/60" : "text-gray-500"}>/person</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {ticket.features?.map((feature, i) => (
                  <li 
                    key={i} 
                    className={`flex items-start gap-3 transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${index * 150 + i * 50 + 400}ms` }}
                  >
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300"
                      style={ticket.popular ? {
                        background: 'rgba(255,255,255,0.15)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)'
                      } : {
                        background: 'linear-gradient(145deg, #ffffff 0%, #e4e4e4 60%, #d0d0d0 100%)',
                        boxShadow: '0 2px 6px rgba(150,150,150,0.2), inset 0 1px 0 rgba(255,255,255,0.9)',
                        border: '1px solid rgba(200,200,200,0.4)'
                      }}
                    >
                      <Check className={`w-3 h-3 ${ticket.popular ? "text-white" : "text-gray-600"}`} />
                    </div>
                    <span className={ticket.popular ? "text-white/70" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              {ticket.popular ? (
                <button 
                  className="w-full py-3.5 rounded-xl font-semibold text-[#1a1a1a] hover:scale-105 transition-all duration-300 shadow-[0_6px_25px_rgba(192,192,192,0.35),inset_0_1px_0_rgba(255,255,255,0.6)] hover:shadow-[0_8px_35px_rgba(192,192,192,0.5),inset_0_1px_0_rgba(255,255,255,0.8)] mt-auto"
                  style={{
                    background: 'linear-gradient(135deg, #f0f0f0 0%, #ffffff 30%, #e0e0e0 70%, #d0d0d0 100%)',
                  }}
                >
                  Get Tickets
                </button>
              ) : (
                <button 
                  className="w-full py-3.5 rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)] mt-auto"
                  style={{
                    background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                  }}
                >
                  Get Tickets
                </button>
              )}
            </div>
          ))}
        </div>

        <div 
          className={`mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 hover:text-gray-600 transition-colors">
            <CreditCard className="w-5 h-5" />
            <span>Visa / Mastercard</span>
          </div>
          <div className="flex items-center gap-2 hover:text-gray-600 transition-colors">
            <Landmark className="w-5 h-5" />
            <span>Bank Transfer</span>
          </div>
          <div className="flex items-center gap-2 hover:text-gray-600 transition-colors">
            <Wallet className="w-5 h-5" />
            <span>Pay with USDT/USDC</span>
          </div>
          <span>Secure payments powered by Stripe</span>
        </div>
      </div>
    </section>
  )
}
