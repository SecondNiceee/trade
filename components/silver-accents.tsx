'use client'

const SECTION_SPARKLES = [
  { id: 1,  x: 4,   y: 10,  size: 5,   opacity: 0.9,  rotate: 0   },
  { id: 2,  x: 12,  y: 25,  size: 3.5, opacity: 0.8,  rotate: 45  },
  { id: 3,  x: 20,  y: 6,   size: 6.5, opacity: 1,    rotate: 30  },
  { id: 4,  x: 29,  y: 40,  size: 4,   opacity: 0.85, rotate: 15  },
  { id: 5,  x: 38,  y: 15,  size: 5.5, opacity: 1,    rotate: 60  },
  { id: 6,  x: 45,  y: 52,  size: 3,   opacity: 0.75, rotate: 0   },
  { id: 7,  x: 53,  y: 8,   size: 6,   opacity: 0.95, rotate: 45  },
  { id: 8,  x: 61,  y: 30,  size: 3.5, opacity: 0.8,  rotate: 20  },
  { id: 9,  x: 69,  y: 20,  size: 5.5, opacity: 1,    rotate: 75  },
  { id: 10, x: 77,  y: 45,  size: 3,   opacity: 0.8,  rotate: 30  },
  { id: 11, x: 84,  y: 12,  size: 5,   opacity: 0.95, rotate: 0   },
  { id: 12, x: 92,  y: 35,  size: 4.5, opacity: 0.9,  rotate: 45  },
  { id: 13, x: 6,   y: 62,  size: 3.5, opacity: 0.8,  rotate: 15  },
  { id: 14, x: 17,  y: 70,  size: 5,   opacity: 0.85, rotate: 60  },
  { id: 15, x: 27,  y: 58,  size: 3.5, opacity: 0.8,  rotate: 0   },
  { id: 16, x: 37,  y: 78,  size: 6,   opacity: 0.95, rotate: 30  },
  { id: 17, x: 50,  y: 68,  size: 4.5, opacity: 0.9,  rotate: 45  },
  { id: 18, x: 60,  y: 83,  size: 3.5, opacity: 0.75, rotate: 75  },
  { id: 19, x: 71,  y: 60,  size: 5,   opacity: 0.95, rotate: 20  },
  { id: 20, x: 82,  y: 76,  size: 3.5, opacity: 0.8,  rotate: 0   },
  { id: 21, x: 90,  y: 55,  size: 5.5, opacity: 1,    rotate: 45  },
  { id: 22, x: 96,  y: 80,  size: 4,   opacity: 0.85, rotate: 30  },
  { id: 23, x: 11,  y: 87,  size: 5,   opacity: 0.9,  rotate: 15  },
  { id: 24, x: 44,  y: 92,  size: 4.5, opacity: 0.85, rotate: 60  },
  { id: 25, x: 67,  y: 90,  size: 3.5, opacity: 0.8,  rotate: 0   },
]

function SparkleIcon({ size, opacity, rotate }: { size: number; opacity: number; rotate: number }) {
  return (
    <svg
      width={size * 4}
      height={size * 4}
      viewBox="0 0 16 16"
      fill="none"
      style={{
        opacity,
        transform: `rotate(${rotate}deg)`,
        filter: `drop-shadow(0 0 ${size * 2}px rgba(255,255,255,0.8)) drop-shadow(0 0 ${size}px rgba(200,200,200,0.6))`,
      }}
    >
      <path
        d="M8 0 L9.2 6.8 L16 8 L9.2 9.2 L8 16 L6.8 9.2 L0 8 L6.8 6.8 Z"
        fill="url(#sectionSparkleGrad)"
      />
      <defs>
        <radialGradient id="sectionSparkleGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#e8e8e8" />
          <stop offset="100%" stopColor="#b0b0b0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export function SectionSparkles() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      {SECTION_SPARKLES.map((s) => (
        <div
          key={s.id}
          className="absolute"
          style={{ left: `${s.x}%`, top: `${s.y}%`, transform: 'translate(-50%, -50%)' }}
        >
          <SparkleIcon size={s.size} opacity={s.opacity} rotate={s.rotate} />
        </div>
      ))}
    </div>
  )
}

export function SilverAccents() {
  return (
    <>
      {/* Premium reflective silver elements - positioned fixed for global effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top reflective gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c0c0c0]/40 to-transparent" />
        
        {/* Premium metallic orb - top right */}
        <div 
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-[80px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(192,192,192,0.5) 0%, rgba(220,220,220,0.2) 50%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        
        {/* Premium metallic orb - middle left */}
        <div 
          className="absolute top-1/3 -left-32 w-[350px] h-[350px] rounded-full blur-[100px] opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(180,180,180,0.4) 0%, rgba(200,200,200,0.15) 50%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
        
        {/* Premium metallic orb - bottom */}
        <div 
          className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(200,200,200,0.45) 0%, rgba(210,210,210,0.15) 50%, transparent 70%)',
            animation: 'float 12s ease-in-out infinite',
            animationDelay: '4s'
          }}
        />

        {/* Subtle reflective diagonal line */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{
            background: 'repeating-linear-gradient(135deg, transparent, transparent 100px, rgba(192,192,192,0.3) 100px, rgba(192,192,192,0.3) 101px)'
          }}
        />
      </div>
    </>
  )
}
