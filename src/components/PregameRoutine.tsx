import React, { useState } from 'react'

interface CheckItem {
  id: string
  emoji: string
  label: string
  detail: string
}

const CHECKLIST: CheckItem[] = [
  {
    id: 'gear',
    emoji: '👟',
    label: 'Pack your gear',
    detail: 'Basketball shoes, water bottle, jersey #77',
  },
  {
    id: 'warmup',
    emoji: '🏃',
    label: '5-minute warmup',
    detail: 'Light jog, arm circles, leg swings, jump rope or jumping jacks',
  },
  {
    id: 'bh',
    emoji: '🤜',
    label: 'Ball-handling rhythm',
    detail: 'Stationary dribbles, crossovers, between-the-legs — wake up your hands',
  },
  {
    id: 'form',
    emoji: '🎯',
    label: 'Form shooting',
    detail: '10 close-range form shots — lock in your BEEF mechanics before game time',
  },
  {
    id: 'slides',
    emoji: '🛡️',
    label: 'Defensive slides',
    detail: '30 seconds of defensive slides each direction — get your feet ready',
  },
  {
    id: 'phrase',
    emoji: '🐍',
    label: 'Say your confidence phrase',
    detail: '"I play smart, I play hard, I help my team."',
  },
]

interface Props {
  onComplete: () => void
  completions: number
}

export default function PregameRoutine({ onComplete, completions }: Props) {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [completed, setCompleted] = useState(false)

  function toggle(id: string) {
    setChecked(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function handleComplete() {
    onComplete()
    setCompleted(true)
    setChecked(new Set())
  }

  const allChecked = CHECKLIST.every(item => checked.has(item.id))

  if (completed) {
    return (
      <div className="min-h-screen court-texture flex flex-col items-center justify-center pb-20 px-4 text-center">
        <div className="text-6xl mb-4">⚡</div>
        <h2 className="text-3xl font-black text-gold mb-2">You're Locked In!</h2>
        <p className="text-white/70 mb-2">Pregame routine complete, Capi Capi.</p>
        <div className="bg-court-mid border border-gold rounded-2xl p-5 shadow-gold mb-6 w-full max-w-sm">
          <p className="text-gold font-black text-2xl">+20 XP</p>
          <p className="text-white/70 text-sm">Pregame routines completed: {completions}</p>
        </div>
        <div className="bg-court-mid border border-gray-800 rounded-xl p-4 w-full max-w-sm">
          <p className="text-gold font-bold mb-2">Your confidence phrase:</p>
          <p className="text-white text-lg font-bold italic">
            "I play smart, I play hard, I help my team."
          </p>
        </div>
        <button
          onClick={() => setCompleted(false)}
          className="mt-6 text-gray-400 text-sm underline"
        >
          Run routine again
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen court-texture pb-20 flex flex-col">
      <div className="bg-court-mid px-4 pt-8 pb-4">
        <p className="text-gray-400 text-sm">⚡ Game Day Protocol</p>
        <h2 className="text-2xl font-black text-white">Pregame Routine</h2>
        <p className="text-gray-400 text-sm mt-1">
          Complete every step before tip-off. No shortcuts.
        </p>
        {completions > 0 && (
          <p className="text-gold text-xs mt-1">✓ Completed {completions}x before</p>
        )}
      </div>

      <div className="flex-1 px-4 py-4">
        {/* Progress */}
        <div className="bg-court-mid border border-gray-800 rounded-xl p-3 mb-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-400 text-xs uppercase tracking-wider">Progress</p>
            <p className="text-gold font-bold text-sm">{checked.size}/{CHECKLIST.length}</p>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-gold rounded-full h-2 transition-all"
              style={{ width: `${(checked.size / CHECKLIST.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Checklist */}
        <div className="space-y-3 mb-4">
          {CHECKLIST.map(item => {
            const done = checked.has(item.id)
            return (
              <button
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`w-full text-left rounded-xl p-4 border transition-all ${
                  done
                    ? 'bg-green-900/30 border-green-700'
                    : 'bg-court-mid border-gray-800 active:bg-gray-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-0.5 ${
                    done ? 'bg-green-500 border-green-500' : 'border-gray-600'
                  }`}>
                    {done && <span className="text-white text-xs font-bold">✓</span>}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{item.emoji}</span>
                      <span className={`font-bold text-sm ${done ? 'text-green-300 line-through' : 'text-white'}`}>
                        {item.label}
                      </span>
                    </div>
                    <p className={`text-xs mt-0.5 ${done ? 'text-gray-500' : 'text-gray-400'}`}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Confidence Phrase Callout */}
        <div className="bg-gradient-to-r from-mamba to-purple-bright rounded-2xl p-4 text-center mb-4">
          <p className="text-white/70 text-xs uppercase tracking-wider mb-1">🐍 Capi Capi's Phrase</p>
          <p className="text-white font-black text-lg leading-tight">
            "I play smart, I play hard, I help my team."
          </p>
          <p className="text-white/60 text-xs mt-1">Say it out loud. Mean it.</p>
        </div>
      </div>

      <div className="px-4">
        <button
          onClick={handleComplete}
          disabled={!allChecked}
          className="w-full bg-gradient-to-r from-gold to-yellow-500 rounded-2xl py-4 text-black font-black text-xl active:scale-95 transition-transform disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {allChecked ? "⚡ I'm Ready to Play!" : `Complete All ${CHECKLIST.length - checked.size} Remaining Steps`}
        </button>
      </div>
    </div>
  )
}
