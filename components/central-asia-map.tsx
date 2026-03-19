"use client"

import { useState } from "react"

// Simplified SVG paths for Central Asian countries (approximate shapes)
const COUNTRIES = {
  kazakhstan: {
    name: "Kazakhstan",
    path: "M 80 20 L 180 15 L 220 40 L 240 30 L 280 50 L 270 80 L 240 90 L 200 85 L 180 100 L 140 95 L 100 110 L 80 90 L 60 70 L 50 40 Z",
    color: "#a0a0a0",
  },
  uzbekistan: {
    name: "Uzbekistan",
    path: "M 100 110 L 140 95 L 180 100 L 175 120 L 190 130 L 180 150 L 150 155 L 120 145 L 100 130 Z",
    color: "#2a2a2a",
    highlight: true,
  },
  turkmenistan: {
    name: "Turkmenistan",
    path: "M 60 130 L 100 130 L 120 145 L 110 170 L 80 180 L 50 165 L 40 140 Z",
    color: "#b8b8b8",
  },
  kyrgyzstan: {
    name: "Kyrgyzstan",
    path: "M 200 85 L 240 90 L 250 105 L 230 115 L 200 110 L 190 95 Z",
    color: "#909090",
  },
  tajikistan: {
    name: "Tajikistan",
    path: "M 190 130 L 230 115 L 250 125 L 245 150 L 220 165 L 195 155 L 180 150 Z",
    color: "#a8a8a8",
  },
  afghanistan: {
    name: "Afghanistan",
    path: "M 150 155 L 180 150 L 195 155 L 220 165 L 230 190 L 200 210 L 160 200 L 140 180 L 130 160 Z",
    color: "#c0c0c0",
  },
}

// Uzbekistan center for marker
const UZ_CENTER = { x: 145, y: 125 }

export function CentralAsiaMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null)

  const handleMouseEnter = (
    countryKey: string,
    countryName: string,
    e: React.MouseEvent<SVGPathElement>
  ) => {
    setHoveredCountry(countryKey)
    const svg = e.currentTarget.closest("svg")
    const rect = svg?.getBoundingClientRect()
    if (rect) {
      setTooltip({
        name: countryName,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent<SVGPathElement>) => {
    const svg = e.currentTarget.closest("svg")
    const rect = svg?.getBoundingClientRect()
    if (rect && tooltip) {
      setTooltip({
        ...tooltip,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseLeave = () => {
    setHoveredCountry(null)
    setTooltip(null)
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute z-20 px-3 py-1.5 rounded-lg text-sm font-medium pointer-events-none whitespace-nowrap"
          style={{
            left: tooltip.x,
            top: tooltip.y - 45,
            transform: "translateX(-50%)",
            background: "linear-gradient(145deg, #1a1a1a, #2a2a2a)",
            color: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {tooltip.name}
        </div>
      )}

      <svg
        viewBox="0 0 300 230"
        className="w-full h-full"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      >
        {/* Background */}
        <rect x="0" y="0" width="300" height="230" fill="#f5f5f5" rx="8" />

        {/* Countries */}
        {Object.entries(COUNTRIES).map(([key, country]) => {
          const isHovered = hoveredCountry === key
          const isUzbekistan = key === "uzbekistan"

          return (
            <path
              key={key}
              d={country.path}
              fill={isHovered ? (isUzbekistan ? "#000000" : "#707070") : country.color}
              stroke="#ffffff"
              strokeWidth={isUzbekistan ? 2 : 1.5}
              style={{
                cursor: "pointer",
                transition: "fill 0.2s ease, filter 0.2s ease",
                filter: isUzbekistan ? "drop-shadow(0 2px 6px rgba(0,0,0,0.3))" : "none",
              }}
              onMouseEnter={(e) => handleMouseEnter(key, country.name, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          )
        })}

        {/* Pulse rings on Uzbekistan */}
        <circle
          cx={UZ_CENTER.x}
          cy={UZ_CENTER.y}
          r="12"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          className="animate-ping"
          style={{ animationDuration: "2s", transformOrigin: `${UZ_CENTER.x}px ${UZ_CENTER.y}px` }}
        />
        <circle
          cx={UZ_CENTER.x}
          cy={UZ_CENTER.y}
          r="18"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          className="animate-ping"
          style={{ animationDuration: "2s", animationDelay: "0.5s", transformOrigin: `${UZ_CENTER.x}px ${UZ_CENTER.y}px` }}
        />

        {/* Center marker */}
        <circle
          cx={UZ_CENTER.x}
          cy={UZ_CENTER.y}
          r="8"
          fill="#ffffff"
          stroke="#1a1a1a"
          strokeWidth="2"
        />

        {/* UZ label */}
        <text
          x={UZ_CENTER.x}
          y={UZ_CENTER.y - 18}
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="#ffffff"
          style={{
            textShadow: "0 1px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          UZ
        </text>
      </svg>

      {/* Legend */}
      <div
        className="absolute bottom-3 left-3 flex flex-col gap-1 px-2.5 py-1.5 rounded-lg"
        style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(200,200,200,0.4)",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#2a2a2a" }} />
          <span className="text-[10px] font-medium text-gray-700">Uzbekistan</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#a0a0a0" }} />
          <span className="text-[10px] text-gray-500">Central Asia</span>
        </div>
      </div>
    </div>
  )
}
