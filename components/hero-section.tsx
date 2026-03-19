"use client"

import { ArrowRight, MapPin, Calendar, ChevronDown } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { useEffect, useState } from "react"
import type { HeroSettings } from "@/sanity/lib/types"

interface HeroSectionProps {
  data?: HeroSettings | null
}

// Static sparkle positions — fixed so they don't re-render
const SPARKLES = [
  { id: 1,  x: 8,   y: 12,  size: 3,   opacity: 0.7,  rotate: 0   },
  { id: 2,  x: 15,  y: 28,  size: 2,   opacity: 0.5,  rotate: 45  },
  { id: 3,  x: 22,  y: 7,   size: 4,   opacity: 0.8,  rotate: 30  },
  { id: 4,  x: 31,  y: 42,  size: 2.5, opacity: 0.6,  rotate: 15  },
  { id: 5,  x: 40,  y: 18,  size: 3,   opacity: 0.9,  rotate: 60  },
  { id: 6,  x: 47,  y: 55,  size: 2,   opacity: 0.4,  rotate: 0   },
  { id: 7,  x: 55,  y: 9,   size: 4,   opacity: 0.75, rotate: 45  },
  { id: 8,  x: 62,  y: 33,  size: 2,   opacity: 0.55, rotate: 20  },
  { id: 9,  x: 70,  y: 22,  size: 3.5, opacity: 0.85, rotate: 75  },
  { id: 10, x: 78,  y: 48,  size: 2,   opacity: 0.5,  rotate: 30  },
  { id: 11, x: 85,  y: 14,  size: 3,   opacity: 0.7,  rotate: 0   },
  { id: 12, x: 92,  y: 38,  size: 2.5, opacity: 0.65, rotate: 45  },
  { id: 13, x: 5,   y: 65,  size: 2,   opacity: 0.45, rotate: 15  },
  { id: 14, x: 18,  y: 72,  size: 3,   opacity: 0.6,  rotate: 60  },
  { id: 15, x: 28,  y: 60,  size: 2,   opacity: 0.5,  rotate: 0   },
  { id: 16, x: 38,  y: 80,  size: 4,   opacity: 0.8,  rotate: 30  },
  { id: 17, x: 50,  y: 70,  size: 2.5, opacity: 0.55, rotate: 45  },
  { id: 18, x: 60,  y: 85,  size: 2,   opacity: 0.4,  rotate: 75  },
  { id: 19, x: 72,  y: 62,  size: 3,   opacity: 0.7,  rotate: 20  },
  { id: 20, x: 83,  y: 78,  size: 2,   opacity: 0.5,  rotate: 0   },
  { id: 21, x: 90,  y: 58,  size: 3.5, opacity: 0.75, rotate: 45  },
  { id: 22, x: 96,  y: 82,  size: 2,   opacity: 0.45, rotate: 30  },
  { id: 23, x: 12,  y: 88,  size: 3,   opacity: 0.6,  rotate: 15  },
  { id: 24, x: 44,  y: 93,  size: 2.5, opacity: 0.5,  rotate: 60  },
  { id: 25, x: 67,  y: 92,  size: 2,   opacity: 0.4,  rotate: 0   },
]

function SparkleIcon({ size, opacity, rotate }: { size: number; opacity: number; rotate: number }) {
  return (
    <svg
      width={size * 4}
      height={size * 4}
      viewBox="0 0 16 16"
      fill="none"
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
    >
      {/* 4-point star sparkle */}
      <path
        d="M8 0 L9.2 6.8 L16 8 L9.2 9.2 L8 16 L6.8 9.2 L0 8 L6.8 6.8 Z"
        fill="url(#sparkleGrad)"
      />
      <defs>
        <radialGradient id="sparkleGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#d8d8d8" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </radialGradient>
      </defs>
    </svg>
  )
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

      {/* Static silver sparkles */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {SPARKLES.map((s) => (
          <div
            key={s.id}
            className="absolute"
            style={{ left: `${s.x}%`, top: `${s.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <SparkleIcon size={s.size} opacity={s.opacity} rotate={s.rotate} />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 pt-24 pb-12">
        <div className="text-center max-w-6xl mx-auto">
          <div
            className={`relative inline-flex items-center overflow-hidden rounded-full px-5 py-2.5 mb-8 transition-all duration-700 hover:scale-105 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              background: 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 25%, #f5f5f5 50%, #e0e0e0 75%, #d8d8d8 100%)',
              boxShadow: '0 8px 30px rgba(150,150,150,0.2), 0 2px 8px rgba(180,180,180,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(180,180,180,0.2)',
              border: '1px solid rgba(200,200,200,0.5)',
            }}
          >
            <span className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 35%, transparent 60%)' }} />
            <span className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <span className="relative flex h-2.5 w-2.5 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-[#a0a0a0] to-[#c0c0c0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-br from-[#d0d0d0] to-[#909090] shadow-[0_0_8px_rgba(192,192,192,0.6)]"></span>
            </span>
            <span className="relative text-gray-700 text-sm font-semibold tracking-wide">{badge}</span>
          </div>

          <h1
            className={`font-bold leading-none mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span 
              className="relative italic font-black text-[clamp(3.5rem,12vw,10rem)]"
              style={{
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                backgroundSize: '200% 100%',
                animation: 'text-shimmer 4s ease-in-out infinite',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))',
                display: 'inline-block',
                overflow: 'visible',
                paddingRight: '0.08em',
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
                  className="group relative overflow-hidden px-8 py-3.5 rounded-xl text-base font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_25px_rgba(192,192,192,0.3)]"
                  style={{
                    background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                    color: '#fff'
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
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
