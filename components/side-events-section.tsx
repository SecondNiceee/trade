"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Crown, Wine, Briefcase, Star, Sparkles } from "lucide-react"
import type { SideEvent, SiteSettings } from "@/sanity/lib/types"

interface SideEventsSectionProps {
  events: SideEvent[]
  settings?: SiteSettings | null
}

const iconMap = {
  crown: Crown,
  wine: Wine,
  briefcase: Briefcase,
  star: Star,
}

const colorThemes = {
  amber: {
    gradient: "from-amber-100 via-yellow-50 to-transparent",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    glowColor: "#f59e0b",
  },
  rose: {
    gradient: "from-rose-100 via-pink-50 to-transparent",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    glowColor: "#f43f5e",
  },
  blue: {
    gradient: "from-blue-100 via-cyan-50 to-transparent",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    glowColor: "#3b82f6",
  },
  emerald: {
    gradient: "from-emerald-100 via-green-50 to-transparent",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    glowColor: "#10b981",
  },
}

export function SideEventsSection({ events, settings }: SideEventsSectionProps) {
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

  const title = settings?.sideEventsSectionTitle || "Premium Experiences"
  const subtitle = settings?.sideEventsSectionSubtitle || "Exclusive gatherings and curated experiences for our distinguished guests."

  return (
    <section ref={sectionRef} className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-100/50 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(100, 100, 100, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 100, 100, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-400" />
            <Sparkles className="w-4 h-4 text-gray-600 animate-pulse" />
            <span className="text-gray-600 text-sm font-semibold tracking-wider uppercase">Side Events</span>
            <Sparkles className="w-4 h-4 text-gray-600 animate-pulse" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-400" />
          </div>
          <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            {title.split(' ')[0]} <span className="relative inline-block">
              <span className="relative z-10 text-gray-700">{title.split(' ').slice(1).join(' ')}</span>
              <span className="absolute inset-0 blur-2xl bg-gray-300/50 animate-pulse" />
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => {
            const IconComponent = iconMap[event.icon || 'star'] || Star
            const theme = colorThemes[event.colorTheme || 'amber']
            
            return (
              <div
                key={event._id}
                className={`group relative p-8 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  ${hoveredIndex === index ? "scale-[1.02]" : ""}
                `}
                style={{ 
                  transitionDelay: `${index * 150 + 200}ms`,
                  background: `linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,248,248,0.9) 40%, rgba(240,240,240,0.85) 100%)`,
                  boxShadow: hoveredIndex === index
                    ? `0 25px 60px rgba(180,180,180,0.35), 0 8px 20px rgba(200,200,200,0.2), inset 0 2px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(180,180,180,0.3), 0 0 0 1px rgba(210,210,210,0.5)`
                    : `0 8px 30px rgba(180,180,180,0.2), 0 2px 8px rgba(200,200,200,0.1), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(180,180,180,0.2), 0 0 0 1px rgba(210,210,210,0.4)`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Colored gradient base — the original theme color, subtly blended in */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-40`}
                />

                {/* Glossy silver top sheen */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(160deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 30%, transparent 55%, rgba(255,255,255,0.1) 80%, rgba(240,240,240,0.2) 100%)',
                  }}
                />

                {/* Moving light sweep on hover */}
                <div 
                  className={`absolute top-0 bottom-0 w-1/3 pointer-events-none transition-all duration-700 ease-in-out ${
                    hoveredIndex === index ? 'left-full' : '-left-1/3'
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
                  }}
                />

                {/* Top edge mirror line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                {/* Colored glow orb on hover */}
                <div 
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-all duration-700 ${
                    hoveredIndex === index 
                      ? "opacity-50 scale-150" 
                      : "opacity-20 scale-100"
                  }`}
                  style={{ background: `radial-gradient(circle, ${theme.glowColor}40, transparent 70%)` }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        hoveredIndex === index ? "scale-110 rotate-3" : ""
                      }`}
                      style={{
                        background: 'linear-gradient(145deg, #ffffff 0%, #e8e8e8 60%, #d4d4d4 100%)',
                        boxShadow: '0 4px 15px rgba(150,150,150,0.25), inset 0 2px 0 rgba(255,255,255,1), inset 0 -2px 4px rgba(180,180,180,0.3)',
                        border: '1px solid rgba(200,200,200,0.5)'
                      }}
                    >
                      <IconComponent className={`w-7 h-7 ${theme.iconColor} transition-all duration-500 ${
                        hoveredIndex === index ? "scale-110" : ""
                      }`} />
                    </div>
                    {event.tag && (
                      <span 
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 transition-all duration-300 ${
                          hoveredIndex === index ? "scale-105" : ""
                        }`}
                        style={{
                          background: 'linear-gradient(135deg, #f8f8f8 0%, #ffffff 50%, #eeeeee 100%)',
                          boxShadow: '0 2px 8px rgba(180,180,180,0.2), inset 0 1px 0 rgba(255,255,255,0.9)',
                          border: '1px solid rgba(200,200,200,0.5)'
                        }}
                      >
                        {event.tag}
                      </span>
                    )}
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 ${
                    hoveredIndex === index ? "text-gray-900" : "text-gray-800"
                  }`}>
                    {event.title}
                  </h3>
                  <p className="text-gray-500 mb-4 transition-colors duration-300 group-hover:text-gray-600">
                    {event.description}
                  </p>
                  {event.date && (
                    <p className="text-gray-400 text-sm mb-6 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      {event.date}
                    </p>
                  )}

                  <div className={`flex items-center gap-2 text-gray-700 font-medium transition-all duration-500 ${
                    hoveredIndex === index 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 -translate-x-4"
                  }`}>
                    <span>Learn More</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                      hoveredIndex === index ? "translate-x-1" : ""
                    }`} />
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <circle cx="100" cy="100" r="60" stroke="#6b7280" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="40" stroke="#6b7280" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="20" stroke="#6b7280" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom decorative element */}
        <div className={`mt-16 flex justify-center transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
