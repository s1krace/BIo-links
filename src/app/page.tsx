'use client'

import { useState, useEffect } from 'react'

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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] font-mono text-gray-400">
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
          <h1 className="text-2xl text-white tracking-tight">
            racecar.cc
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
            Anti-Cheat Analyst @ Epic Games
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-xs text-gray-600 mt-6">
          <a href="https://discord.com/users/1456460012460445779" className="hover:text-gray-400 transition-colors">
            discord (GOT TERM NEW LINK UPDATED)
          </a>
          <a href="https://x.com/xx_racecar_xx" className="hover:text-gray-400 transition-colors">
            twitter
          </a>
          <a href="https://t.me/racecarX" className="hover:text-gray-400 transition-colors">
            telegram
          </a>
        </div>
      </div>

      {/* Time - bottom left corner */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-700/60 font-mono">
        {time}
      </div>
    </div>
  )
}
