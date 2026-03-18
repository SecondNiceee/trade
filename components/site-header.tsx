"use client"

import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "Partners", href: "#partners" },
  { label: "Tickets", href: "#tickets" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState("EN")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-gradient-to-b from-white/95 to-[#f8f8f8]/90 backdrop-blur-xl border-b border-[#d0d0d0]/50 shadow-[0_4px_30px_rgba(192,192,192,0.15)]" 
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex items-center gap-2.5 group">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-[0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
            style={{
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)',
            }}
          >
            <span 
              className="font-bold text-lg bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #c0c0c0 100%)'
              }}
            >S</span>
          </div>
          <span 
            className="font-bold text-xl tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 50%, #1a1a1a 100%)'
            }}
          >SILKON</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-gray-600 hover:text-gray-900 transition-all text-sm font-medium group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#a0a0a0] to-[#d0d0d0] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-all text-sm px-3 py-1.5 rounded-lg hover:bg-[#f0f0f0] group">
            <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>{lang}</span>
          </button>
          <button 
            className="relative overflow-hidden px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_25px_rgba(192,192,192,0.3)]"
            style={{
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)',
              color: '#fff'
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
            <span className="relative">Get Tickets</span>
          </button>
        </div>

        <button
          className="lg:hidden text-gray-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <button className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-colors text-sm">
                <Globe className="w-4 h-4" />
                <span>{lang}</span>
              </button>
            </div>
            <button className="bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 w-fit">
              Get Tickets
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
