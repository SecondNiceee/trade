"use client"

import { useEffect, useState, useRef } from "react"
import { TrendingUp, Users, Building, Plane, Globe, Star } from "lucide-react"
import type { WhyUzbekistanSettings } from "@/sanity/lib/types"

const iconMap = {
  "trending-up": TrendingUp,
  "users": Users,
  "building": Building,
  "plane": Plane,
  "globe": Globe,
  "star": Star,
}

const defaultStats = [
  { icon: "trending-up" as const, value: 7.6, suffix: "%", label: "GDP Growth Rate" },
  { icon: "users" as const, value: 38, suffix: "M+", label: "Population" },
  { icon: "building" as const, value: 15000, suffix: "+", label: "Foreign Companies" },
  { icon: "plane" as const, value: 50, suffix: "+", label: "Direct Flight Routes" },
  { icon: "globe" as const, value: 35, suffix: "", label: "Visa Free Directions" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current * 10) / 10)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div
      ref={ref}
      className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent"
      style={{
        backgroundImage: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 50%, #1a1a1a 100%)",
      }}
    >
      {count}
      {suffix}
    </div>
  )
}

interface WhyUzbekistanSectionProps {
  data?: WhyUzbekistanSettings | null
}

export function WhyUzbekistanSection({ data }: WhyUzbekistanSectionProps) {
  const sectionLabel = data?.sectionLabel || "Why Uzbekistan"
  const title = data?.title || "The Heart of Central Asia"
  const description =
    data?.description ||
    "Strategically positioned at the crossroads of ancient trade routes, Uzbekistan offers unparalleled access to markets spanning Europe, Asia, and the Middle East."
  const stats = data?.stats?.length ? data.stats : defaultStats
  const gatewayTitle = data?.gatewayTitle || "A Gateway to 3 Billion Consumers"
  const gatewayDescription =
    data?.gatewayDescription ||
    "Uzbekistan's strategic location provides direct access to the CIS, South Asia, and emerging markets. The country's ambitious reform agenda has created one of the most business-friendly environments in the region."
  const gatewayPoints = data?.gatewayPoints?.length
    ? data.gatewayPoints
    : [
        "Free economic zones with tax incentives",
        "Simplified visa regime for 90+ countries",
        "Modern infrastructure and logistics hubs",
        "Rapidly growing digital economy",
      ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Premium metallic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-white to-[#fafafa]" />

      {/* Metallic glow orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(192,192,192,0.15) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(180,180,180,0.12) 0%, transparent 70%)" }}
      />

      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d0d0d0]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold tracking-wider uppercase bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #808080 100%)",
            }}
          >
            {sectionLabel}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 30%, #2a2a2a 70%, #1a1a1a 100%)",
            }}
          >
            {title}
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">{description}</p>
        </div>

        <div className={`grid gap-6 mb-16 ${stats.length <= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"}`}>
          {stats.map((stat, index) => {
            const IconComponent = iconMap[(stat.icon as keyof typeof iconMap) || "trending-up"] || TrendingUp
            return (
              <div
                key={index}
                className="group relative text-center p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03]"
                style={{
                  background:
                    "linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 25%, #f5f5f5 50%, #e0e0e0 75%, #d8d8d8 100%)",
                  boxShadow:
                    "0 8px 30px rgba(150,150,150,0.2), 0 2px 8px rgba(180,180,180,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(180,180,180,0.2)",
                  border: "1px solid rgba(200,200,200,0.5)",
                }}
              >
                {/* Glossy top sheen */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 35%, transparent 60%)",
                  }}
                />
                {/* Moving sweep on hover */}
                <div
                  className="absolute top-0 bottom-0 w-1/2 -left-1/2 group-hover:left-full transition-all duration-700 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)",
                  }}
                />
                {/* Top edge mirror line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "linear-gradient(145deg, #ffffff 0%, #e8e8e8 60%, #d4d4d4 100%)",
                      boxShadow:
                        "0 4px 15px rgba(150,150,150,0.25), inset 0 2px 0 rgba(255,255,255,1), inset 0 -2px 4px rgba(180,180,180,0.3)",
                      border: "1px solid rgba(200,200,200,0.5)",
                    }}
                  >
                    <IconComponent className="w-7 h-7 text-gray-600" />
                  </div>
                  <AnimatedCounter value={stat.value || 0} suffix={stat.suffix || ""} />
                  <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3
              className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 50%, #1a1a1a 100%)",
              }}
            >
              {gatewayTitle}
            </h3>
            <p className="text-gray-500">{gatewayDescription}</p>
            <div className="space-y-4">
              {gatewayPoints.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #a0a0a0 0%, #d0d0d0 100%)",
                      boxShadow: "0 0 8px rgba(192,192,192,0.4)",
                    }}
                  />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-3xl">
            <div
              className="aspect-square rounded-3xl flex items-center justify-center transition-all duration-500"
              style={{
                background:
                  "linear-gradient(145deg, #f0f0f0 0%, #e8e8e8 25%, #f5f5f5 50%, #e0e0e0 75%, #d8d8d8 100%)",
                boxShadow:
                  "0 20px 60px rgba(150,150,150,0.25), 0 8px 20px rgba(180,180,180,0.15), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(180,180,180,0.2)",
                border: "1px solid rgba(200,200,200,0.5)",
              }}
            >
              {/* Glossy sheen overlay */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 35%, transparent 60%)",
                }}
              />
              {/* Moving light sweep on hover */}
              <div
                className="absolute top-0 bottom-0 w-1/2 -left-1/2 group-hover:left-full transition-all duration-700 pointer-events-none rounded-3xl"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                }}
              />
              {/* Top edge mirror line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white to-transparent rounded-3xl" />

              <div className="relative w-64 h-64">
                <div
                  className="absolute inset-0 rounded-full border-2 border-[#c0c0c0]/30 animate-ping"
                  style={{ animationDuration: "3s" }}
                />
                <div
                  className="absolute inset-4 rounded-full border-2 border-[#c0c0c0]/40 animate-ping"
                  style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                />
                <div
                  className="absolute inset-8 rounded-full border-2 border-[#c0c0c0]/50 animate-ping"
                  style={{ animationDuration: "3s", animationDelay: "1s" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(145deg, #ffffff 0%, #e8e8e8 60%, #d4d4d4 100%)",
                      boxShadow:
                        "0 6px 25px rgba(150,150,150,0.3), inset 0 2px 0 rgba(255,255,255,1), inset 0 -2px 4px rgba(180,180,180,0.3)",
                      border: "1.5px solid rgba(200,200,200,0.6)",
                    }}
                  >
                    <span
                      className="font-bold text-lg bg-clip-text text-transparent"
                      style={{
                        backgroundImage: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)",
                      }}
                    >
                      UZ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
