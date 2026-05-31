import React, { useState, useEffect, useRef, useCallback } from 'react'

interface Props {
  durationSeconds: number
  drillName: string
  makeTarget: number
  onComplete: (makes: number) => void
}

function playTone(freq: number, duration: number, vol = 0.3) {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = freq
    osc.type = 'sine'
    gain.gain.setValueAtTime(vol, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + duration)
  } catch {
    // audio not supported — skip
  }
}

export default function DrillTimer({ durationSeconds, drillName, makeTarget, onComplete }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(durationSeconds)
  const [makes, setMakes] = useState(0)
  const [running, setRunning] = useState(false)
  const [finished, setFinished] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const pct = secondsLeft / durationSeconds
  const mins = Math.floor(secondsLeft / 60)
  const secs = secondsLeft % 60

  const timerColor = pct > 0.5
    ? 'text-green-400'
    : pct > 0.25
    ? 'text-yellow-400'
    : 'text-red-400'

  const ringColor = pct > 0.5 ? '#4ade80' : pct > 0.25 ? '#facc15' : '#f87171'

  const radius = 54
  const circumference = 2 * Math.PI * radius
  const strokeDash = circumference * pct

  const finish = useCallback(() => {
    setFinished(true)
    setRunning(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
    playTone(880, 0.6)
    setTimeout(() => playTone(1100, 0.4), 150)
  }, [])

  useEffect(() => {
    if (!running) return
    intervalRef.current = setInterval(() => {
      setSecondsLeft(s => {
        if (s <= 1) { finish(); return 0 }
        if (s === 31) playTone(600, 0.2)
        if (s <= 10 && s > 0) playTone(440, 0.1)
        return s - 1
      })
    }, 1000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [running, finish])

  function start() {
    playTone(520, 0.15)
    setRunning(true)
  }

  function addMake() {
    if (finished) return
    setMakes(m => {
      const next = m + 1
      playTone(1200, 0.08)
      return next
    })
  }

  function removeMake() {
    setMakes(m => Math.max(0, m - 1))
  }

  if (finished) {
    const hitTarget = makes >= makeTarget
    return (
      <div className="flex flex-col items-center py-8 px-4">
        <div className="text-5xl mb-3">{hitTarget ? '🔥' : '💪'}</div>
        <p className={`text-2xl font-black mb-1 ${hitTarget ? 'text-gold' : 'text-white'}`}>
          {makes} / {makeTarget} makes
        </p>
        <p className="text-gray-400 text-sm mb-6">
          {hitTarget ? 'Target hit! Elite work.' : `${makeTarget - makes} short — get it next time.`}
        </p>
        <button
          onClick={() => onComplete(makes)}
          className="w-full bg-gradient-to-r from-mamba to-mamba-bright rounded-2xl py-4 text-white font-black text-lg active:scale-95 transition-transform shadow-mamba"
        >
          Done! +{15 + (hitTarget ? 10 : 0)} XP ➜
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center py-6 px-4">
      {/* SVG Ring Timer */}
      <div className="relative mb-4">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r={radius} fill="none" stroke="#1f2937" strokeWidth="8" />
          <circle
            cx="70" cy="70" r={radius}
            fill="none"
            stroke={ringColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${strokeDash} ${circumference}`}
            transform="rotate(-90 70 70)"
            style={{ transition: 'stroke-dasharray 1s linear, stroke 0.5s' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-3xl font-black tabular-nums ${timerColor}`}>
            {mins}:{secs.toString().padStart(2, '0')}
          </span>
          <span className="text-gray-500 text-xs">remaining</span>
        </div>
      </div>

      {/* Make Counter */}
      <div className="w-full bg-court-mid border border-gray-800 rounded-2xl p-4 mb-4">
        <p className="text-gray-400 text-xs uppercase tracking-wider text-center mb-3">
          Makes — Target: {makeTarget}
        </p>
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={removeMake}
            className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 text-white text-2xl font-black active:scale-90 transition-transform"
          >
            −
          </button>
          <div className="text-center">
            <div className={`text-5xl font-black tabular-nums ${makes >= makeTarget ? 'text-gold' : 'text-white'}`}>
              {makes}
            </div>
            {makes >= makeTarget && <div className="text-gold text-xs font-bold">TARGET HIT 🔥</div>}
          </div>
          <button
            onClick={addMake}
            className="w-12 h-12 rounded-full bg-mamba border border-red-700 text-white text-2xl font-black active:scale-90 transition-transform"
          >
            +
          </button>
        </div>
        {/* Make Progress Bar */}
        <div className="w-full bg-gray-800 rounded-full h-2 mt-3">
          <div
            className="bg-gold rounded-full h-2 transition-all"
            style={{ width: `${Math.min(100, (makes / makeTarget) * 100)}%` }}
          />
        </div>
      </div>

      {!running ? (
        <button
          onClick={start}
          className="w-full bg-gradient-to-r from-green-700 to-green-900 rounded-2xl py-4 text-white font-black text-xl active:scale-95 transition-transform"
        >
          ▶ Start Timer
        </button>
      ) : (
        <p className="text-gray-500 text-sm text-center">
          Tap <span className="text-red-400 font-bold">+</span> every time you make it
        </p>
      )}
    </div>
  )
}
