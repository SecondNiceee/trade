"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"

// Central Asia bounding box — focused view
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// ISO numeric codes for Central Asian countries
const CENTRAL_ASIA_COUNTRIES: Record<string, { name: string; color: string; highlight: boolean }> = {
  "860": { name: "Uzbekistan",   color: "#2a2a2a", highlight: true  },
  "398": { name: "Kazakhstan",   color: "#888888", highlight: false },
  "417": { name: "Kyrgyzstan",   color: "#999999", highlight: false },
  "762": { name: "Tajikistan",   color: "#aaaaaa", highlight: false },
  "795": { name: "Turkmenistan", color: "#bbbbbb", highlight: false },
  "004": { name: "Afghanistan",  color: "#cccccc", highlight: false },
}

const REGION_CODES = new Set(Object.keys(CENTRAL_ASIA_COUNTRIES))

// Uzbekistan center coordinates
const UZ_CENTER: [number, number] = [63.0, 41.5]

export function CentralAsiaMap() {
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute z-20 px-3 py-1.5 rounded-lg text-sm font-medium pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y - 40,
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

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [65, 44],
          scale: 900,
        }}
        width={500}
        height={400}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup
          center={[65, 44]}
          zoom={1}
          minZoom={0.8}
          maxZoom={4}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies
                .filter((geo) => REGION_CODES.has(geo.id?.toString().padStart(3, "0")))
                .map((geo) => {
                  const id = geo.id?.toString().padStart(3, "0")
                  const country = CENTRAL_ASIA_COUNTRIES[id || ""]
                  const isUz = id === "860"
                  const isHovered = hoveredCountry === id

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={(e) => {
                        setHoveredCountry(id || null)
                        const rect = (e.target as SVGElement)
                          .closest("svg")
                          ?.getBoundingClientRect()
                        if (rect) {
                          setTooltip({
                            name: country?.name || "",
                            x: e.clientX - rect.left,
                            y: e.clientY - rect.top,
                          })
                        }
                      }}
                      onMouseLeave={() => {
                        setHoveredCountry(null)
                        setTooltip(null)
                      }}
                      style={{
                        default: {
                          fill: isUz
                            ? "#1a1a1a"
                            : country?.color || "#cccccc",
                          stroke: "#ffffff",
                          strokeWidth: 0.8,
                          outline: "none",
                          transition: "fill 0.2s ease",
                          filter: isUz
                            ? "drop-shadow(0 2px 8px rgba(0,0,0,0.4))"
                            : "none",
                        },
                        hover: {
                          fill: isUz ? "#000000" : "#666666",
                          stroke: "#ffffff",
                          strokeWidth: 1,
                          outline: "none",
                          cursor: "pointer",
                        },
                        pressed: {
                          fill: isUz ? "#000000" : "#555555",
                          outline: "none",
                        },
                      }}
                    />
                  )
                })
            }
          </Geographies>

          {/* UZ marker on Uzbekistan */}
          <Marker coordinates={UZ_CENTER}>
            <g>
              {/* Pulse rings */}
              <circle
                cx={0} cy={0} r={12}
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth={1}
                style={{ animation: "pulse-ring 2.5s ease-out infinite" }}
              />
              <circle
                cx={0} cy={0} r={18}
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth={1}
                style={{ animation: "pulse-ring 2.5s ease-out infinite", animationDelay: "0.6s" }}
              />
              {/* Center dot */}
              <circle
                cx={0} cy={0} r={7}
                fill="#ffffff"
                stroke="#1a1a1a"
                strokeWidth={1.5}
              />
              {/* UZ label */}
              <text
                textAnchor="middle"
                y={-16}
                style={{
                  fontSize: "9px",
                  fontWeight: "700",
                  fill: "#ffffff",
                  fontFamily: "sans-serif",
                  letterSpacing: "0.05em",
                  textShadow: "0 1px 3px rgba(0,0,0,0.8)",
                }}
              >
                UZ
              </text>
            </g>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>

      {/* Legend */}
      <div
        className="absolute bottom-4 left-4 flex flex-col gap-1.5 px-3 py-2 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(200,200,200,0.4)",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ background: "#1a1a1a" }} />
          <span className="text-xs font-medium text-gray-700">Uzbekistan</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ background: "#888" }} />
          <span className="text-xs text-gray-500">Central Asia</span>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%   { r: 8;  opacity: 0.8; }
          100% { r: 28; opacity: 0; }
        }
      `}</style>
    </div>
  )
}
