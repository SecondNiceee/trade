'use client'

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
