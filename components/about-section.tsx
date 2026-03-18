"use client"

import { useEffect, useRef, useState } from "react"
import { Globe, Users, Lightbulb, Sparkles } from "lucide-react"
import type { AboutSettings } from "@/sanity/lib/types"

const iconMap = {
  globe: Globe,
  users: Users,
  lightbulb: Lightbulb,
}

interface AboutSectionProps {
  data?: AboutSettings | null
}

export function AboutSection({ data }: AboutSectionProps) {
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

  const sectionLabel = data?.sectionLabel || "About the Forum"
  const title = data?.title || "The Premier Business Event of Central Asia"
  const description = data?.description || "SILKON 2026 brings together visionary leaders, innovative startups, and global enterprises to forge new partnerships and shape the future of international commerce along the New Silk Road."
  const keyPoints = data?.keyPoints || [
    { icon: "globe" as const, title: "Global Connection", description: "Bridging East and West through innovation, trade, and cultural exchange along the historic Silk Road." },
    { icon: "users" as const, title: "5000+ Attendees", description: "Join world leaders, entrepreneurs, and innovators from over 80 countries for two days of transformation." },
    { icon: "lightbulb" as const, title: "Future Forward", description: "Explore cutting-edge technologies, sustainable development, and the digital economy of tomorrow." },
  ]
  const whyTashkentTitle = data?.whyTashkentTitle || "Why Tashkent?"
  const whyTashkentDescription = data?.whyTashkentDescription || "At the crossroads of ancient trade routes, Uzbekistan emerges as the strategic hub connecting Europe, Asia, and the Middle East. Tashkent, with its blend of rich history and modern infrastructure, provides the perfect backdrop for this transformative event."
  const whyTashkentPoints = data?.whyTashkentPoints || ["Strategic geographic location", "Rapidly growing economy", "Rich cultural heritage", "Modern business infrastructure"]

  return (
    <section id="about" ref={sectionRef} className="relative py-24 bg-gradient-to-b from-white to-[#f8f8f8] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fafafa]/50 to-white" />
      
      {/* Premium metallic accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse" style={{ background: 'radial-gradient(circle, rgba(192,192,192,0.2) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse" style={{ background: 'radial-gradient(circle, rgba(180,180,180,0.15) 0%, transparent 70%)', animationDelay: '1.5s' }} />
      
      {/* Subtle reflective line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d0d0d0]/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-gray-600 animate-pulse" />
            <span className="text-gray-600 text-sm font-semibold tracking-wider uppercase">{sectionLabel}</span>
            <Sparkles className="w-4 h-4 text-gray-600 animate-pulse" />
          </div>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance"
            style={{
              color: '#1a1a1a',
              textShadow: '0 1px 2px rgba(0,0,0,0.1), 0 0 1px rgba(0,0,0,0.2)',
              WebkitTextStroke: '0.5px rgba(0,0,0,0.1)'
            }}
          >
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto text-pretty">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {keyPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon || 'globe'] || Globe
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${hoveredIndex === index ? "scale-105" : ""}`}
                style={{ 
                  transitionDelay: `${index * 150 + 200}ms`,
                  background: 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 25%, #f5f5f5 50%, #e0e0e0 75%, #d8d8d8 100%)',
                  boxShadow: hoveredIndex === index 
                    ? '0 25px 50px rgba(120,120,120,0.3), 0 10px 20px rgba(150,150,150,0.2), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(180,180,180,0.3)'
                    : '0 10px 30px rgba(150,150,150,0.15), 0 4px 10px rgba(180,180,180,0.1), inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(180,180,180,0.2)',
                  border: '1px solid rgba(200,200,200,0.5)'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Reflective shine overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 25%, transparent 50%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.3) 100%)',
                    opacity: hoveredIndex === index ? 1 : 0.7
                  }} 
                />
                
                {/* Moving light reflection on hover */}
                <div 
                  className={`absolute inset-0 pointer-events-none transition-all duration-700 ${hoveredIndex === index ? 'translate-x-full' : '-translate-x-full'}`}
                  style={{ 
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                    width: '50%'
                  }} 
                />
                
                {/* Top edge highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                
                <div className="relative z-10">
                  <div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      hoveredIndex === index ? "scale-110 rotate-3" : ""
                    }`}
                    style={{
                      background: 'linear-gradient(145deg, #ffffff 0%, #e8e8e8 50%, #d0d0d0 100%)',
                      boxShadow: '0 4px 15px rgba(150,150,150,0.3), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -2px 4px rgba(180,180,180,0.3)',
                      border: '1px solid rgba(200,200,200,0.4)'
                    }}
                  >
                    <IconComponent className={`w-7 h-7 text-gray-600 transition-transform duration-500 ${
                      hoveredIndex === index ? "scale-110" : ""
                    }`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                    hoveredIndex === index ? "text-gray-800" : "text-gray-700"
                  }`}>
                    {point.title}
                  </h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div 
          className={`group relative rounded-3xl overflow-hidden p-8 lg:p-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            background: 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 25%, #f5f5f5 50%, #e0e0e0 75%, #d8d8d8 100%)',
            boxShadow: '0 20px 60px rgba(150,150,150,0.25), 0 8px 20px rgba(180,180,180,0.15), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(180,180,180,0.2)',
            border: '1px solid rgba(200,200,200,0.5)',
          }}
        >
          {/* Glossy sheen overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 35%, transparent 60%)' }} />
          {/* Moving light sweep on hover */}
          <div className="absolute top-0 bottom-0 w-1/2 -left-1/2 group-hover:left-full transition-all duration-700 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)' }} />
          {/* Top edge mirror line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-6">
                {whyTashkentTitle}
              </h3>
              <p className="text-gray-600 mb-6">
                {whyTashkentDescription}
              </p>
              <ul className="space-y-3">
                {whyTashkentPoints.map((item, i) => (
                  <li 
                    key={i} 
                    className={`flex items-center gap-3 text-gray-700 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${i * 100 + 700}ms` }}
                  >
                    <div 
                      className="w-2.5 h-2.5 rounded-full animate-pulse"
                      style={{
                        background: 'linear-gradient(145deg, #c0c0c0 0%, #909090 100%)',
                        boxShadow: '0 1px 3px rgba(100,100,100,0.3)'
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #e8e8e8 0%, #d8d8d8 50%, #c8c8c8 100%)',
                boxShadow: 'inset 0 2px 8px rgba(150,150,150,0.2), 0 4px 15px rgba(150,150,150,0.15)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-32 h-32 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #e8e8e8 60%, #d4d4d4 100%)',
                    boxShadow: '0 6px 25px rgba(150,150,150,0.3), inset 0 2px 0 rgba(255,255,255,1), inset 0 -2px 4px rgba(180,180,180,0.3)',
                    border: '1px solid rgba(200,200,200,0.5)'
                  }}
                >
                  <Globe className="w-16 h-16 text-gray-500" />
                </div>
              </div>
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 rounded-full border-2 border-[#c0c0c0]/40 animate-ping" style={{ animationDuration: '3s' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border-2 border-[#c0c0c0]/30 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
