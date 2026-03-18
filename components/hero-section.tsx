"use client"

import { ArrowRight, MapPin, Calendar, ChevronDown } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { useEffect, useState } from "react"
import type { HeroSettings } from "@/sanity/lib/types"

interface HeroSectionProps {
  data?: HeroSettings | null
}

export function HeroSection({ data }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const badge = data?.badge || "Silk Road Global Forum 2026"
  const title = data?.title || "SILKON"
  const year = data?.year || "2026"
  const tagline = data?.tagline || "Where Innovation Meets Tradition Along the New Silk Road"
  const eventDate = data?.eventDate || "October 15–16, 2026"
  const eventLocation = data?.eventLocation || "Tashkent, Uzbekistan"
  const ctaButtons = data?.ctaButtons || [
    { label: "Get Tickets", href: "#tickets", primary: true },
    { label: "Become a Speaker", href: "#contact", primary: false },
    { label: "Become a Partner", href: "#partners", primary: false },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 pt-24 pb-12">
        <div className="text-center max-w-6xl mx-auto">
          <div
            className={`inline-flex items-center rounded-full px-5 py-2.5 mb-8 transition-all duration-700 hover:scale-105 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              background: 'linear-gradient(135deg, #f0f0f0 0%, #ffffff 45%, #e8e8e8 100%)',
              boxShadow: '0 8px 30px rgba(150,150,150,0.3), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(180,180,180,0.2)',
              backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 50%, rgba(255,255,255,0.3) 100%)'
            }}
          >
            <span className="relative flex h-2.5 w-2.5 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-[#a0a0a0] to-[#c0c0c0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-br from-[#d0d0d0] to-[#909090] shadow-[0_0_8px_rgba(192,192,192,0.6)]"></span>
            </span>
            <span className="text-gray-700 text-sm font-semibold tracking-wide">{badge}</span>
          </div>

          <h1
            className={`font-bold leading-none mb-4 text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span 
              className="relative italic font-black text-[clamp(3.5rem,12vw,10rem)] tracking-tighter"
              style={{
                background: 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 15%, #f8f8f8 30%, #ffffff 45%, #f5f5f5 55%, #e0e0e0 70%, #d8d8d8 85%, #c8c8c8 100%)',
                backgroundSize: '200% 100%',
                animation: 'text-shimmer 4s ease-in-out infinite',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                filter: 'drop-shadow(0 4px 8px rgba(100,100,100,0.25)) drop-shadow(0 2px 4px rgba(80,80,80,0.2)) drop-shadow(0 0 60px rgba(200,200,200,0.4))',
                WebkitTextStroke: '1px rgba(50,50,50,0.35)'
              }}
            >
              {title}
            </span>
          </h1>

          <div
            className={`text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.4em] uppercase mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              background: 'linear-gradient(90deg, #a0a0a0 0%, #d0d0d0 30%, #f0f0f0 50%, #d0d0d0 70%, #a0a0a0 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              animation: 'text-shimmer 5s ease-in-out infinite',
              textShadow: '0 0 30px rgba(192,192,192,0.3)'
            }}
          >
            {year}
          </div>

          <p
            className={`text-gray-600 text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pretty transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {tagline}
          </p>

          <div
            className={`flex flex-wrap items-center justify-center gap-6 mb-10 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors group">
              <Calendar className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform" />
              <span>{eventDate}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors group">
              <MapPin className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform" />
              <span>{eventLocation}</span>
            </div>
          </div>

          <div
            className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {ctaButtons.map((btn, index) => (
              btn.primary ? (
                <a
                  key={index}
                  href={btn.href || "#"}
                  className="group relative overflow-hidden bg-gradient-to-br from-[#f0f0f0] via-[#ffffff] to-[#e8e8e8] text-[#1a1a1a] px-8 py-3.5 rounded-xl text-base font-semibold flex items-center gap-2 shadow-[0_8px_30px_rgba(150,150,150,0.3),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_12px_40px_rgba(192,192,192,0.4),inset_0_1px_0_rgba(255,255,255,1)] border border-[#c0c0c0] hover:border-[#a0a0a0] hover:scale-105 transition-all duration-300"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 50%, rgba(255,255,255,0.3) 100%)'
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative">{btn.label}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                </a>
              ) : (
                <a
                  key={index}
                  href={btn.href || "#"}
                  className="group relative overflow-hidden px-8 py-3.5 rounded-xl text-base font-semibold text-gray-700 hover:text-gray-900 hover:scale-105 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 25%, #f5f5f5 50%, #e0e0e0 75%, #d8d8d8 100%)',
                    boxShadow: '0 8px 30px rgba(150,150,150,0.2), 0 2px 8px rgba(180,180,180,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(180,180,180,0.2)',
                    border: '1px solid rgba(200,200,200,0.5)',
                  }}
                >
                  <span className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 35%, transparent 60%)' }} />
                  <span className="absolute top-0 bottom-0 w-1/2 -left-1/2 group-hover:left-full transition-all duration-700 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)' }} />
                  <span className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  <span className="relative">{btn.label}</span>
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#about"
          className="text-gray-400 hover:text-gray-700 transition-all duration-300 hover:scale-110"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
