"use client"

import { Download, FileText, Camera, Video } from "lucide-react"

const resources = [
  {
    icon: FileText,
    title: "Press Kit",
    description: "Logos, brand guidelines, and official assets",
    action: "Download ZIP",
  },
  {
    icon: Camera,
    title: "Photo Gallery",
    description: "High-resolution images from past events",
    action: "View Gallery",
  },
  {
    icon: Video,
    title: "Video Archive",
    description: "Highlights and keynote recordings",
    action: "Watch Videos",
  },
]

const pressReleases = [
  {
    date: "March 2026",
    title: "SILKON 2026 Announces Keynote Lineup",
    excerpt: "Global tech leaders and government officials confirmed for October forum.",
  },
  {
    date: "February 2026",
    title: "Partnership with Eurasian Economic Union",
    excerpt: "Strategic collaboration to promote regional trade and investment.",
  },
  {
    date: "January 2026",
    title: "Early Bird Registration Now Open",
    excerpt: "Save 30% on tickets until March 31, 2026.",
  },
]

export function MediaSection() {
  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {/* Premium metallic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-white to-[#fafafa]" />
      
      {/* Metallic glow orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(192,192,192,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(180,180,180,0.1) 0%, transparent 70%)' }} />
      
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d0d0d0]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <span 
            className="text-sm font-semibold tracking-wider uppercase bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #808080 100%)'
            }}
          >Media & Press</span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 30%, #2a2a2a 70%, #1a1a1a 100%)'
            }}
          >
            Press Resources
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything journalists and media partners need to cover SILKON 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03]"
              style={{
                background: 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 25%, #f5f5f5 50%, #e0e0e0 75%, #d8d8d8 100%)',
                boxShadow: '0 8px 30px rgba(150,150,150,0.2), 0 2px 8px rgba(180,180,180,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(180,180,180,0.2)',
                border: '1px solid rgba(200,200,200,0.5)',
              }}
            >
              {/* Glossy sheen */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 35%, transparent 60%)' }} />
              <div className="absolute top-0 bottom-0 w-1/2 -left-1/2 group-hover:left-full transition-all duration-700 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)' }} />
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

              <div className="relative z-10">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(145deg, #ffffff 0%, #e8e8e8 60%, #d4d4d4 100%)',
                    boxShadow: '0 4px 15px rgba(150,150,150,0.25), inset 0 2px 0 rgba(255,255,255,1), inset 0 -2px 4px rgba(180,180,180,0.3)',
                    border: '1px solid rgba(200,200,200,0.5)'
                  }}
                >
                  <resource.icon className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-gray-800 text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <button className="flex items-center gap-2 text-gray-600 text-sm font-semibold hover:text-gray-900 transition-colors">
                  <Download className="w-4 h-4" />
                  {resource.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-gray-800 text-xl font-semibold mb-6">Latest Press Releases</h3>
          <div className="space-y-4">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="group relative flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 25%, #f5f5f5 50%, #e0e0e0 75%, #d8d8d8 100%)',
                  boxShadow: '0 4px_20px rgba(150,150,150,0.15), 0 2px 6px rgba(180,180,180,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(180,180,180,0.2)',
                  border: '1px solid rgba(200,200,200,0.5)',
                }}
              >
                {/* Glossy sheen */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 35%, transparent 60%)' }} />
                <div className="absolute top-0 bottom-0 w-1/2 -left-1/2 group-hover:left-full transition-all duration-700 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)' }} />
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <span 
                  className="relative z-10 text-sm font-semibold whitespace-nowrap text-gray-500"
                >{release.date}</span>
                <div className="relative z-10 flex-1">
                  <h4 className="text-gray-800 font-semibold group-hover:text-gray-900 transition-colors">
                    {release.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">{release.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="mt-12 p-8 rounded-2xl border border-[#d0d0d0]"
          style={{
            background: 'linear-gradient(135deg, rgba(250,250,250,0.9) 0%, rgba(245,245,245,0.8) 50%, rgba(240,240,240,0.7) 100%)',
            boxShadow: '0 4px 20px rgba(192,192,192,0.15), inset 0 1px 0 rgba(255,255,255,0.8)'
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 
                className="text-xl font-semibold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)'
                }}
              >Media Accreditation</h3>
              <p className="text-gray-500">
                Journalists and media professionals can apply for press passes and interview requests.
              </p>
            </div>
            <button 
              className="px-6 py-3 rounded-xl text-[#1a1a1a] font-semibold transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(192,192,192,0.3),inset_0_1px_0_rgba(255,255,255,0.6)] hover:shadow-[0_6px_25px_rgba(192,192,192,0.4)] whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #e8e8e8 0%, #ffffff 30%, #e0e0e0 70%, #d0d0d0 100%)'
              }}
            >
              Apply for Press Pass
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
