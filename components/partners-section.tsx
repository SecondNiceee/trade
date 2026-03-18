"use client"

import { useEffect, useRef, useState } from "react"
import { Crown, Award, Star, Handshake, Sparkles } from "lucide-react"
import { ShimmerButton } from "@/components/shimmer-button"
import { urlForImage } from "@/sanity/lib/image"
import type { Partner, SiteSettings } from "@/sanity/lib/types"

interface PartnersSectionProps {
  partners: Partner[]
  settings?: SiteSettings | null
}

const tierConfig = {
  "Platinum": { icon: Crown, color: "from-amber-100 to-yellow-50" },
  "Gold": { icon: Award, color: "from-yellow-100 to-orange-50" },
  "Silver": { icon: Star, color: "from-gray-100 to-slate-50" },
  "Media Partners": { icon: Handshake, color: "from-blue-100 to-cyan-50" },
}

export function PartnersSection({ partners, settings }: PartnersSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null)
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

  const title = settings?.partnersSectionTitle || "Trusted by Industry Leaders"
  const subtitle = settings?.partnersSectionSubtitle || "Join our network of prestigious partners driving innovation across the Silk Road region."

  // Group partners by tier
  const tiers = ["Platinum", "Gold", "Silver", "Media Partners"] as const
  const partnersByTier = tiers.map(tier => ({
    tier,
    ...tierConfig[tier],
    partners: partners.filter(p => p.tier === tier)
  })).filter(t => t.partners.length > 0)

  return (
    <section id="partners" ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-white to-[#fafafa]" />
      
      {/* Premium metallic background accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(192,192,192,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(180,180,180,0.12) 0%, transparent 70%)' }} />
      
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d0d0d0]/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-gray-600 animate-pulse" />
            <span className="text-gray-600 text-sm font-semibold tracking-wider uppercase">Our Partners</span>
            <Sparkles className="w-4 h-4 text-gray-600 animate-pulse" />
          </div>
          <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            {title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {partnersByTier.map((tier, tierIndex) => {
            const TierIcon = tier.icon
            return (
              <div 
                key={tierIndex}
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${tierIndex * 150 + 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'linear-gradient(145deg, #f8f8f8 0%, #e8e8e8 50%, #d8d8d8 100%)',
                      boxShadow: '0 4px 12px rgba(150,150,150,0.2), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(180,180,180,0.3)',
                      border: '1px solid rgba(200,200,200,0.5)',
                    }}
                  >
                    <TierIcon className="w-5 h-5 text-gray-600" />
                  </div>
                  <h3 className="text-gray-900 text-xl font-semibold">{tier.tier}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent ml-4" />
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {tier.partners.map((partner, partnerIndex) => {
                    const logoUrl = partner.logo ? urlForImage(partner.logo)?.width(120).height(120).url() : null
                    const key = `${tierIndex}-${partnerIndex}`
                    return (
                      <div
                        key={partner._id}
                        className={`group relative aspect-square rounded-xl flex items-center justify-center p-4 overflow-hidden transition-all duration-500 cursor-pointer ${
                          hoveredPartner === key ? "scale-105" : ""
                        }`}
                        style={{
                          transitionDelay: `${partnerIndex * 50}ms`,
                          background: 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 25%, #f5f5f5 50%, #e0e0e0 75%, #d8d8d8 100%)',
                          boxShadow: hoveredPartner === key
                            ? '0 20px 45px rgba(150,150,150,0.3), 0 6px 15px rgba(180,180,180,0.2), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(180,180,180,0.3)'
                            : '0 6px 20px rgba(150,150,150,0.15), 0 2px 6px rgba(180,180,180,0.1), inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(180,180,180,0.2)',
                          border: '1px solid rgba(200,200,200,0.5)',
                        }}
                        onMouseEnter={() => setHoveredPartner(key)}
                        onMouseLeave={() => setHoveredPartner(null)}
                      >
                        {/* Glossy top sheen */}
                        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 35%, transparent 60%)' }} />
                        {/* Moving sweep on hover */}
                        <div className={`absolute top-0 bottom-0 w-1/2 pointer-events-none transition-all duration-700 ${hoveredPartner === key ? 'left-full' : '-left-1/2'}`} style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)' }} />
                        {/* Top edge mirror line */}
                        <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                        {logoUrl ? (
                          <img 
                            src={logoUrl} 
                            alt={partner.name}
                            className="relative z-10 max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <span className={`relative z-10 text-center text-sm font-semibold transition-colors duration-300 ${
                            hoveredPartner === key ? "text-gray-800" : "text-gray-600"
                          }`}>
                            {partner.name}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              className="relative overflow-hidden px-8 py-3.5 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-[0_6px_25px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_35px_rgba(192,192,192,0.3)]"
              style={{
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)'
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Become a Partner</span>
            </button>
            <button 
              className="px-8 py-3.5 rounded-xl font-semibold text-gray-700 transition-all duration-300 hover:scale-105 border border-[#c0c0c0] hover:border-[#a0a0a0] bg-gradient-to-b from-white to-[#f5f5f5] shadow-[0_4px_15px_rgba(192,192,192,0.2),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_6px_25px_rgba(192,192,192,0.35)]"
            >
              Download Partnership Deck
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
