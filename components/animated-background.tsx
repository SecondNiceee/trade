"use client"

import { useEffect, useState } from "react"

// Dollar sign as a single continuous SVG path (normalized to ~200x300 box)
// Path traces the $ shape: vertical line + two S-curves
const DOLLAR_PATH =
  "M100 20 L100 280 M100 60 C140 55 175 65 175 100 C175 135 140 148 100 150 C60 152 25 165 25 200 C25 235 60 248 100 245 C140 242 175 232 175 220"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] to-white overflow-hidden">
      {/* Premium metallic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5]/80 via-white/95 to-white" />
      
      {/* Reflective silver highlights */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c0c0c0]/30 to-transparent" />

      {/* Premium metallic gradient orbs */}
      <div
        className={`absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-1000 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
        style={{ 
          background: 'radial-gradient(circle, rgba(192,192,192,0.35) 0%, rgba(220,220,220,0.15) 50%, transparent 70%)',
          animation: "pulse 5s ease-in-out infinite" 
        }}
      />
      <div
        className={`absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-1000 delay-300 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
        style={{ 
          background: 'radial-gradient(circle, rgba(180,180,180,0.3) 0%, rgba(200,200,200,0.1) 50%, transparent 70%)',
          animation: "pulse 6s ease-in-out infinite", 
          animationDelay: "1s" 
        }}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] transition-all duration-1000 delay-500 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
        style={{ 
          background: 'radial-gradient(ellipse, rgba(210,210,210,0.35) 0%, rgba(230,230,230,0.15) 40%, transparent 60%)',
          animation: "pulse 7s ease-in-out infinite", 
          animationDelay: "2s" 
        }}
      />

      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Particle gradients */}
            <radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="30%" stopColor="rgba(220,220,220,1)" />
              <stop offset="70%" stopColor="rgba(220,220,220,0.8)" />
              <stop offset="100%" stopColor="rgba(220,220,220,0)" />
            </radialGradient>
            <radialGradient id="neonPulse2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="25%" stopColor="rgba(220,220,220,0.9)" />
              <stop offset="60%" stopColor="rgba(220,220,220,0.7)" />
              <stop offset="100%" stopColor="rgba(220,220,220,0)" />
            </radialGradient>
            <radialGradient id="neonPulse3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="35%" stopColor="rgba(220,220,220,1)" />
              <stop offset="75%" stopColor="rgba(220,220,220,0.6)" />
              <stop offset="100%" stopColor="rgba(220,220,220,0)" />
            </radialGradient>

            {/* Thread fade gradients */}
            <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="15%" stopColor="rgba(100,100,100,0.8)" />
              <stop offset="85%" stopColor="rgba(100,100,100,0.8)" />
              <stop offset="100%" stopColor="rgba(255,255,255,1)" />
            </linearGradient>
            <linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="12%" stopColor="rgba(100,100,100,0.7)" />
              <stop offset="88%" stopColor="rgba(100,100,100,0.7)" />
              <stop offset="100%" stopColor="rgba(255,255,255,1)" />
            </linearGradient>
            <linearGradient id="threadFade3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="18%" stopColor="rgba(100,100,100,0.8)" />
              <stop offset="82%" stopColor="rgba(100,100,100,0.8)" />
              <stop offset="100%" stopColor="rgba(255,255,255,1)" />
            </linearGradient>

            {/* Dollar sign draw gradient - fades in as it's drawn */}
            <linearGradient id="dollarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(100,100,100,0.7)" />
              <stop offset="100%" stopColor="rgba(150,150,150,0.3)" />
            </linearGradient>

            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="dollarGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className={`transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}>

            {/* ── DOLLAR SIGN — slow draw animation ──────────────── */}
            {/* Scaled ~3.5x, centered at (600, 400) */}
            <g transform="translate(250, -125) scale(3.5)" filter="url(#dollarGlow)" opacity="0.24">
              {/* Static ghost of full dollar — subtle background */}
              <path
                d={DOLLAR_PATH}
                stroke="rgba(180,180,180,0.3)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Animated draw — stroke-dasharray animates to reveal the path */}
              <path
                id="dollarDrawPath"
                d={DOLLAR_PATH}
                stroke="url(#dollarGrad)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                pathLength="1"
              >
                {/* Draw the stroke from 0 to full, then pause, then reset — SLOW */}
                <animate
                  attributeName="stroke-dasharray"
                  values="0 1; 1 0; 1 0; 0 1"
                  keyTimes="0; 0.45; 0.9; 1"
                  dur="22s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0 0 1 1; 0.4 0 0.2 1"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0.9; 0.9; 0.2; 0"
                  keyTimes="0; 0.45; 0.9; 1"
                  dur="22s"
                  repeatCount="indefinite"
                />
              </path>
              {/* Bright leading dot that runs along the dollar path — SLOW */}
              <circle r="4" fill="rgba(100,100,100,0.8)" filter="url(#strongGlow)">
                <animateMotion
                  dur="10s"
                  repeatCount="indefinite"
                  calcMode="linear"
                  begin="0s"
                >
                  <mpath href="#dollarDrawPath" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="1; 1; 0; 1"
                  keyTimes="0; 0.85; 0.95; 1"
                  dur="22s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            {/* ─────────────────────────────────────────────────────────── */}

            {/* Floating ambient particles - bigger and brighter */}
            {[...Array(15)].map((_, i) => (
              <circle
                key={`particle-${i}`}
                cx={100 + i * 80}
                cy={200 + (i % 4) * 150}
                r={3 + (i % 3) * 1.5}
                fill="#e0e0e0"
                opacity={0.85 + (i % 3) * 0.1}
                filter="url(#strongGlow)"
              >
                <animate
                  attributeName="cy"
                  values={`${200 + (i % 4) * 150};${180 + (i % 4) * 150};${200 + (i % 4) * 150}`}
                  dur={`${3 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values={`${0.85 + (i % 3) * 0.1};1;${0.85 + (i % 3) * 0.1}`}
                  dur={`${2 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values={`${3 + (i % 3) * 1.5};${4 + (i % 3) * 2};${3 + (i % 3) * 1.5}`}
                  dur={`${2.5 + i * 0.15}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>
        </svg>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(150, 150, 150, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(150, 150, 150, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  )
}
