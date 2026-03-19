'use client'

const SECTION_SPARKLES = [
  { id: 1,  x: 8,   y: 15,  size: 5,   opacity: 0.9,  rotate: 0   },
  { id: 2,  x: 25,  y: 8,   size: 6,   opacity: 1,    rotate: 30  },
  { id: 3,  x: 45,  y: 20,  size: 5.5, opacity: 0.95, rotate: 60  },
  { id: 4,  x: 70,  y: 12,  size: 5,   opacity: 0.9,  rotate: 45  },
  { id: 5,  x: 90,  y: 25,  size: 5.5, opacity: 1,    rotate: 15  },
  { id: 6,  x: 15,  y: 75,  size: 5,   opacity: 0.85, rotate: 20  },
  { id: 7,  x: 35,  y: 85,  size: 6,   opacity: 0.95, rotate: 45  },
  { id: 8,  x: 60,  y: 70,  size: 5,   opacity: 0.9,  rotate: 0   },
  { id: 9,  x: 80,  y: 80,  size: 5.5, opacity: 1,    rotate: 30  },
  { id: 10, x: 95,  y: 65,  size: 5,   opacity: 0.85, rotate: 60  },
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
      }}
    >
      <path
        d="M8 0 L9.2 6.8 L16 8 L9.2 9.2 L8 16 L6.8 9.2 L0 8 L6.8 6.8 Z"
        fill="#d0d0d0"
      />
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
