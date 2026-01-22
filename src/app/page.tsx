'use client'

import { useState, useEffect } from 'react'
import LightPillar from '@/components/backgrounds/LightPillar'

export default function Home() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const melbourneTime = new Intl.DateTimeFormat('en-AU', {
        timeZone: 'Australia/Melbourne',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now)

      const melbourneDate = new Intl.DateTimeFormat('en-AU', {
        timeZone: 'Australia/Melbourne',
        month: 'short',
        day: 'numeric',
      }).format(now)

      setTime(`${melbourneTime} · ${melbourneDate}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] font-tiktok-sans text-gray-400">
      <LightPillar
        className="pointer-events-none z-0"
        topColor="#ff0040"
        bottomColor="#0033cc"
        intensity={0.9}
        rotationSpeed={0.45}
        glowAmount={0.0025}
        pillarWidth={3.4}
        pillarHeight={0.48}
        noiseIntensity={0.58}
        pillarRotation={25}
        interactive={false}
        mixBlendMode="screen"
        quality="high"
      />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Minimal geometric decoration - top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Minimal geometric decoration - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content Column */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        {/* Name and Bio together */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl text-white tracking-tight tiktok-sans-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            racecar.cc
          </h1>
          <p className="text-sm text-white leading-relaxed max-w-sm tiktok-sans" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            just vibe coding
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-xs text-white mt-6">
          <a href="https://discord.com/users/1435818893749784680" className="hover:text-gray-400 transition-colors tiktok-sans" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            discord
          </a>
          <a href="https://x.com/xx_racecar_xx" className="hover:text-gray-400 transition-colors tiktok-sans" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            twitter
          </a>
          <a href="https://t.me/racecarX" className="hover:text-gray-400 transition-colors tiktok-sans" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            telegram
          </a>
        </div>
      </div>

      {/* Time - bottom left corner */}
      <div className="absolute bottom-4 left-4 text-xs text-white tiktok-sans" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
        {time}
      </div>
    </div>
  )
}
