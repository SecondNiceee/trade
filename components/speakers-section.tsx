"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Linkedin, Twitter, Sparkles } from "lucide-react"
import { urlForImage } from "@/sanity/lib/image"
import type { Speaker, SiteSettings } from "@/sanity/lib/types"
import { SectionSparkles } from "@/components/silver-accents"

interface SpeakersSectionProps {
  speakers: Speaker[]
  settings?: SiteSettings | null
}

const SPEAKERS_PER_PAGE = 12

export function SpeakersSection({ speakers, settings }: SpeakersSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(SPEAKERS_PER_PAGE)
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

  const title = settings?.speakersSectionTitle || "World-Class Thought Leaders"
  const subtitle = settings?.speakersSectionSubtitle || "Learn from industry pioneers and visionaries shaping the future of global business."
  const categories = ["All", ...(settings?.speakerCategories || ["Technology", "Finance", "Government", "Sustainability"])]

  const filteredSpeakers = activeCategory === "All" 
    ? speakers 
    : speakers.filter(s => s.category === activeCategory)

  // Reset visible count when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setVisibleCount(SPEAKERS_PER_PAGE)
  }

  const displayedSpeakers = filteredSpeakers.slice(0, visibleCount)
  const hasMoreSpeakers = visibleCount < filteredSpeakers.length
  const remainingCount = filteredSpeakers.length - visibleCount

  const loadMoreSpeakers = () => {
    setVisibleCount(prev => prev + SPEAKERS_PER_PAGE)
  }

  return (
    <section id="speakers" ref={sectionRef} className="relative py-24 bg-[#f8f8f8] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fafafa] to-white" />
      <SectionSparkles />
      
      {/* Premium metallic accents */}
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse" style={{ background: 'radial-gradient(circle, rgba(192,192,192,0.25) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse" style={{ background: 'radial-gradient(circle, rgba(180,180,180,0.2) 0%, transparent 70%)', animationDelay: '1s' }} />
      
      {/* Subtle divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d0d0d0]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-gray-600 animate-pulse" />
            <span className="text-gray-600 text-sm font-semibold tracking-wider uppercase">Featured Speakers</span>
            <Sparkles className="w-4 h-4 text-gray-600 animate-pulse" />
          </div>
          <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div 
          className={`flex flex-wrap items-center justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "text-white shadow-[0_4px_20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] scale-105"
                  : "bg-gradient-to-b from-white to-[#f5f5f5] text-gray-600 hover:text-gray-900 hover:scale-105 border border-[#d0d0d0] hover:border-[#b0b0b0] shadow-[0_2px_10px_rgba(192,192,192,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]"
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
                ...(activeCategory === category ? {
                  background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)'
                } : {})
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedSpeakers.map((speaker, index) => {
            const imageUrl = speaker.image ? urlForImage(speaker.image)?.width(400).height(500).url() : null
            return (
              <div
                key={speaker._id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${hoveredIndex === index ? "scale-[1.03]" : ""}`}
                style={{ 
                  transitionDelay: `${index * 100 + 300}ms`,
                  background: 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 25%, #f5f5f5 50%, #e0e0e0 75%, #d8d8d8 100%)',
                  boxShadow: hoveredIndex === index
                    ? '0 25px 60px rgba(150,150,150,0.35), 0 8px 20px rgba(180,180,180,0.2), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(180,180,180,0.3)'
                    : '0 8px 30px rgba(150,150,150,0.2), 0 2px 8px rgba(180,180,180,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(180,180,180,0.2)',
                  border: '1px solid rgba(200,200,200,0.5)',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glossy sheen overlay */}
                <div className="absolute inset-0 pointer-events-none z-20" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 35%, transparent 60%)' }} />
                {/* Moving light sweep */}
                <div className={`absolute top-0 bottom-0 w-1/2 pointer-events-none z-20 transition-all duration-700 ${hoveredIndex === index ? 'left-full' : '-left-1/2'}`} style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)' }} />
                {/* Top edge mirror line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white to-transparent z-20" />

                <div className="aspect-[3/4] relative" style={{ background: 'linear-gradient(145deg, #e8e8e8 0%, #d8d8d8 50%, #c8c8c8 100%)' }}>
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={speaker.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500 ${
                          hoveredIndex === index ? "scale-110" : ""
                        }`}
                        style={{
                          background: 'linear-gradient(145deg, #ffffff 0%, #e8e8e8 60%, #d4d4d4 100%)',
                          boxShadow: '0 4px 15px rgba(150,150,150,0.3), inset 0 2px 0 rgba(255,255,255,1), inset 0 -2px 4px rgba(180,180,180,0.3)',
                          border: '1px solid rgba(200,200,200,0.5)',
                          color: '#606060'
                        }}
                      >
                        {speaker.name.split(" ").map(n => n[0]).join("")}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e8e8e8]/80 via-transparent to-transparent" style={{ top: '60%' }} />
                  
                  <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 z-30 ${
                    hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  }`}>
                    {speaker.linkedin && (
                      <a 
                        href={speaker.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:scale-110 transition-all"
                        style={{
                          background: 'linear-gradient(145deg, #ffffff 0%, #e8e8e8 60%, #d8d8d8 100%)',
                          boxShadow: '0 3px 10px rgba(150,150,150,0.25), inset 0 1px 0 rgba(255,255,255,1)',
                          border: '1px solid rgba(200,200,200,0.5)'
                        }}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {speaker.twitter && (
                      <a 
                        href={speaker.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:scale-110 transition-all"
                        style={{
                          background: 'linear-gradient(145deg, #ffffff 0%, #e8e8e8 60%, #d8d8d8 100%)',
                          boxShadow: '0 3px 10px rgba(150,150,150,0.25), inset 0 1px 0 rgba(255,255,255,1)',
                          border: '1px solid rgba(200,200,200,0.5)'
                        }}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-5 relative">
                  <span className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                    hoveredIndex === index ? "text-gray-900" : "text-gray-500"
                  }`}>
                    {speaker.category}
                  </span>
                  <h3 className={`text-lg font-semibold mt-1 transition-colors duration-300 ${
                    hoveredIndex === index ? "text-gray-900" : "text-gray-800"
                  }`}>
                    {speaker.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{speaker.role}</p>
                </div>
              </div>
            )
          })}
        </div>

        {hasMoreSpeakers && (
          <div 
            className={`text-center mt-12 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button 
              onClick={loadMoreSpeakers}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-gray-700 hover:text-gray-900 font-medium transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 60%, #e8e8e8 100%)',
                boxShadow: '0 4px 15px rgba(150,150,150,0.2), inset 0 1px 0 rgba(255,255,255,1)',
                border: '1px solid rgba(200,200,200,0.5)'
              }}
            >
              View More Speakers ({remainingCount} remaining)
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        )}
        
        {!hasMoreSpeakers && filteredSpeakers.length > SPEAKERS_PER_PAGE && (
          <div 
            className={`text-center mt-12 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-gray-500 text-sm">
              Showing all {filteredSpeakers.length} speakers
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
