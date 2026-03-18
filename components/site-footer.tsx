"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react"

const navigation = {
  event: [
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    { name: "Agenda", href: "#agenda" },
    { name: "Tickets", href: "#tickets" },
  ],
  participate: [
    { name: "Become a Speaker", href: "#contact" },
    { name: "Become a Partner", href: "#contact" },
    { name: "Volunteer", href: "#" },
    { name: "Exhibit", href: "#" },
  ],
  resources: [
    { name: "Press Kit", href: "#" },
    { name: "Brand Guidelines", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Travel Info", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function SiteFooter() {
  return (
    <footer className="relative bg-[#fafafa] border-t border-[#e0e0e0]">
      {/* Premium metallic ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[150px]" style={{ background: 'radial-gradient(circle, rgba(192,192,192,0.1) 0%, transparent 70%)' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]"
                style={{
                  background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)'
                }}
              >
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span 
                className="font-bold text-xl tracking-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 50%, #1a1a1a 100%)'
                }}
              >SILKON</span>
            </div>
            <p className="text-gray-500 mb-6 max-w-xs">
              The premier business forum connecting global leaders along the New Silk Road.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@silkon2026.com" className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors">
                <Mail className="w-4 h-4" />
                info@silkon2026.com
              </a>
              <a href="tel:+998712345678" className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors">
                <Phone className="w-4 h-4" />
                +998 71 234 56 78
              </a>
              <div className="flex items-start gap-2 text-gray-500">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Tashkent City Congress Center, Uzbekistan</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Event</h4>
            <ul className="space-y-3">
              {navigation.event.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-500 hover:text-gray-800 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Participate</h4>
            <ul className="space-y-3">
              {navigation.participate.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-500 hover:text-gray-800 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-500 hover:text-gray-800 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-500 hover:text-gray-800 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e0e0e0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            2026 SILKON Forum. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-800 transition-all duration-300 hover:scale-110 border border-[#e0e0e0] hover:border-[#c0c0c0] bg-white shadow-[0_2px_8px_rgba(192,192,192,0.1)]"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
