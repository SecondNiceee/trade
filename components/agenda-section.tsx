"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Sparkles } from "lucide-react"
import type { AgendaDay, AgendaSection as AgendaSectionType } from "@/sanity/lib/types"

interface AgendaSectionProps {
  days: AgendaDay[]
  sectionSettings?: AgendaSectionType | null
}

const typeColors: Record<string, { bg: string; text: string; glow: string }> = {
  keynote: { bg: "bg-gray-900", text: "text-white", glow: "shadow-gray-900/30" },
  panel: { bg: "bg-blue-100", text: "text-blue-700", glow: "shadow-blue-500/20" },
  workshop: { bg: "bg-purple-100", text: "text-purple-700", glow: "shadow-purple-500/20" },
  showcase: { bg: "bg-orange-100", text: "text-orange-700", glow: "shadow-orange-500/20" },
  networking: { bg: "bg-pink-100", text: "text-pink-700", glow: "shadow-pink-500/20" },
  break: { bg: "bg-gray-100", text: "text-gray-600", glow: "shadow-gray-500/10" },
}

export function AgendaSection({ days, sectionSettings }: AgendaSectionProps) {
  const [activeDay, setActiveDay] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
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

  const title = sectionSettings?.sectionTitle || "Two Days of Insights"
  const subtitle = sectionSettings?.sectionSubtitle || "Packed with keynotes, panels, workshops, and networking opportunities."

  return (
    <section id="agenda" ref={sectionRef} className="relative py-12 bg-white overflow-hidden">
      {/* Premium metallic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-white to-[#fafafa]" />
      <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse" style={{ background: 'radial-gradient(circle, rgba(192,192,192,0.2) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse" style={{ background: 'radial-gradient(circle, rgba(180,180,180,0.15) 0%, transparent 70%)', animationDelay: '1s' }} />
      
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d0d0d0]/25 to-transparent" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/40 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-gray-600 animate-pulse" />
            <span className="text-gray-600 text-sm font-semibold tracking-wider uppercase">Event Agenda</span>
            <Sparkles className="w-4 h-4 text-gray-600 animate-pulse" />
          </div>
          <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            {title.split(' ').slice(0, -1).join(' ')} <span className="text-gray-600 relative">
              {title.split(' ').slice(-1)[0]}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4 Q50 0 100 4 T200 4" stroke="#4b5563" strokeWidth="2" fill="none" className="animate-pulse" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div 
          className={`flex items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {days.map((day, index) => (
            <button
              key={day._id}
              onClick={() => setActiveDay(activeDay === index ? null : index)}
              className={`relative px-8 py-4 rounded-xl text-center transition-all duration-500 overflow-hidden group ${
                activeDay === index
                  ? "text-white shadow-[0_6px_25px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] scale-105"
                  : "text-gray-700 hover:scale-102 border border-[#d0d0d0] hover:border-[#b0b0b0] bg-gradient-to-b from-white to-[#f5f5f5] shadow-[0_2px_10px_rgba(192,192,192,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]"
              }`}
              style={activeDay === index ? {
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)'
              } : undefined}
            >
              {activeDay === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              )}
              <span className="relative block text-lg font-bold">{day.label}</span>
              <span className={`relative block text-sm ${activeDay === index ? "text-white/70" : "text-gray-500"}`}>
                {day.dateDisplay}
              </span>
            </button>
          ))}
        </div>

        {/* Timeline line */}
        {activeDay !== null && (
        <div className="relative">
          <div className="absolute left-[2.5rem] sm:left-[2.75rem] top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent" />

          <div className="space-y-4">
            {days[activeDay]?.sessions?.map((session, index) => {
              const colors = typeColors[session.type] || typeColors.break
              return (
                <div
                  key={`${activeDay}-${index}`}
                  className={`group relative flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 
                    transition-all duration-500
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
                  `}
                  style={{ 
                    transitionDelay: `${index * 100 + 300}ms`,
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 -translate-x-[calc(100%+1rem)] w-3 h-3 rounded-full bg-gray-600 shadow-lg shadow-gray-600/50 z-10">
                  </div>

                  <div className="flex-shrink-0 w-16 sm:w-20 text-center">
                    <span className="text-lg sm:text-xl font-bold text-gray-600">
                      {session.time}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} shadow-sm ${colors.glow}`}>
                        {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-800">
                      {session.title}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base mb-3">{session.speaker}</p>
                    <div className="flex items-center gap-4 text-gray-400 text-sm group-hover:text-gray-600 transition-colors">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {session.location}
                      </span>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  )
}
