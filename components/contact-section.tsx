"use client"

import { useState } from "react"
import { Send, Mic, Building2 } from "lucide-react"

export function ContactSection() {
  const [formType, setFormType] = useState<"speaker" | "sponsor">("speaker")

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Premium metallic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-white to-[#fafafa]" />
      
      {/* Metallic glow orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(192,192,192,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(180,180,180,0.1) 0%, transparent 70%)' }} />
      
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d0d0d0]/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <span 
            className="text-sm font-semibold tracking-wider uppercase bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #808080 100%)'
            }}
          >Get Involved</span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 30%, #2a2a2a 70%, #1a1a1a 100%)'
            }}
          >
            Join SILKON 2026
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Become a speaker or sponsor and connect with thousands of decision-makers from across the globe.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={() => setFormType("speaker")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              formType === "speaker"
                ? "text-white shadow-[0_4px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
                : "bg-gradient-to-b from-white to-[#f5f5f5] text-gray-600 hover:text-gray-900 border border-[#d0d0d0] hover:border-[#b0b0b0] shadow-[0_2px_10px_rgba(192,192,192,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]"
            }`}
            style={formType === "speaker" ? {
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)'
            } : undefined}
          >
            <Mic className="w-5 h-5" />
            Become a Speaker
          </button>
          <button
            onClick={() => setFormType("sponsor")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              formType === "sponsor"
                ? "text-white shadow-[0_4px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
                : "bg-gradient-to-b from-white to-[#f5f5f5] text-gray-600 hover:text-gray-900 border border-[#d0d0d0] hover:border-[#b0b0b0] shadow-[0_2px_10px_rgba(192,192,192,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]"
            }`}
            style={formType === "sponsor" ? {
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)'
            } : undefined}
          >
            <Building2 className="w-5 h-5" />
            Become a Sponsor
          </button>
        </div>

        <div 
          className="group relative rounded-3xl p-8 sm:p-10 overflow-hidden"
          style={{ 
            background: 'linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 25%, #f5f5f5 50%, #e0e0e0 75%, #d8d8d8 100%)',
            boxShadow: '0 20px 60px rgba(150,150,150,0.25), 0 8px 20px rgba(180,180,180,0.15), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(180,180,180,0.2)',
            border: '1px solid rgba(200,200,200,0.5)',
          }}
        >
          {/* Glossy sheen overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 35%, transparent 60%)' }} />
          {/* Moving light sweep */}
          <div className="absolute top-0 bottom-0 w-1/3 -left-1/3 group-hover:left-full transition-all duration-1000 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)' }} />
          {/* Top edge mirror line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="relative z-10">
          {formType === "speaker" ? (
            <div>
              <h3 
                className="text-xl font-semibold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)'
                }}
              >Speaker Application</h3>
              <p className="text-gray-500 mb-8">
                Share your expertise with global business leaders. We{"'"}re looking for innovative thinkers 
                in technology, finance, sustainability, and international trade.
              </p>
            </div>
          ) : (
            <div>
              <h3 
                className="text-xl font-semibold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)'
                }}
              >Sponsorship Inquiry</h3>
              <p className="text-gray-500 mb-8">
                Maximize your brand visibility and connect with 5,000+ decision-makers. 
                Packages range from $10,000 to custom enterprise solutions.
              </p>
            </div>
          )}

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                  style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 60%, #e8e8e8 100%)', border: '1px solid rgba(200,200,200,0.6)', boxShadow: '0 2px 8px rgba(150,150,150,0.12), inset 0 2px 3px rgba(180,180,180,0.1), inset 0 -1px 0 rgba(255,255,255,0.8)' }}
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                  style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 60%, #e8e8e8 100%)', border: '1px solid rgba(200,200,200,0.6)', boxShadow: '0 2px 8px rgba(150,150,150,0.12), inset 0 2px 3px rgba(180,180,180,0.1), inset 0 -1px 0 rgba(255,255,255,0.8)' }}
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                  style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 60%, #e8e8e8 100%)', border: '1px solid rgba(200,200,200,0.6)', boxShadow: '0 2px 8px rgba(150,150,150,0.12), inset 0 2px 3px rgba(180,180,180,0.1), inset 0 -1px 0 rgba(255,255,255,0.8)' }}
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">Job Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                  style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 60%, #e8e8e8 100%)', border: '1px solid rgba(200,200,200,0.6)', boxShadow: '0 2px 8px rgba(150,150,150,0.12), inset 0 2px 3px rgba(180,180,180,0.1), inset 0 -1px 0 rgba(255,255,255,0.8)' }}
                  placeholder="CEO / Director / Manager"
                />
              </div>
            </div>

            {formType === "speaker" && (
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">Topic / Expertise</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all"
                  style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 60%, #e8e8e8 100%)', border: '1px solid rgba(200,200,200,0.6)', boxShadow: '0 2px 8px rgba(150,150,150,0.12), inset 0 2px 3px rgba(180,180,180,0.1), inset 0 -1px 0 rgba(255,255,255,0.8)' }}
                  placeholder="e.g., Digital Trade, AI, Sustainable Finance"
                />
              </div>
            )}

            {formType === "sponsor" && (
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">Interested Package</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl text-gray-800 focus:outline-none transition-all appearance-none"
                  style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 60%, #e8e8e8 100%)', border: '1px solid rgba(200,200,200,0.6)', boxShadow: '0 2px 8px rgba(150,150,150,0.12), inset 0 2px 3px rgba(180,180,180,0.1), inset 0 -1px 0 rgba(255,255,255,0.8)' }}
                >
                  <option value="">Select a package</option>
                  <option value="platinum">Platinum ($100,000+)</option>
                  <option value="gold">Gold ($50,000)</option>
                  <option value="silver">Silver ($25,000)</option>
                  <option value="media">Media Partner ($10,000)</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all resize-none"
                style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f0f0f0 60%, #e8e8e8 100%)', border: '1px solid rgba(200,200,200,0.6)', boxShadow: '0 2px 8px rgba(150,150,150,0.12), inset 0 2px 3px rgba(180,180,180,0.1), inset 0 -1px 0 rgba(255,255,255,0.8)' }}
                placeholder={formType === "speaker" ? "Tell us about your speaking experience and proposed topic..." : "Tell us about your company and sponsorship goals..."}
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-[0_6px_25px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.25)]"
              style={{
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)'
              }}
            >
              Submit Application
              <Send className="w-4 h-4" />
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}
