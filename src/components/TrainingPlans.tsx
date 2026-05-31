import React, { useState } from 'react'

interface Plan {
  duration: '10' | '20' | '45'
  title: string
  subtitle: string
  emoji: string
  color: string
  steps: { emoji: string; label: string; time: string; detail: string }[]
}

const PLANS: Plan[] = [
  {
    duration: '10',
    title: '10-Minute Hustle',
    subtitle: 'Quick session — no excuses',
    emoji: '⚡',
    color: 'from-blue-700 to-blue-900',
    steps: [
      { emoji: '🧠', label: 'Theory', time: '1 min', detail: 'Read today\'s theme in the training tab' },
      { emoji: '🤜', label: 'Ball-Handling', time: '3 min', detail: 'Two-ball stationary dribble or crossovers' },
      { emoji: '🎯', label: 'Form Shooting', time: '4 min', detail: '20 makes from close range — perfect BEEF form' },
      { emoji: '📓', label: 'Journal', time: '2 min', detail: 'Answer today\'s confidence question' },
    ],
  },
  {
    duration: '20',
    title: '20-Minute Grind',
    subtitle: 'Real work, real results',
    emoji: '🔥',
    color: 'from-orange-700 to-red-900',
    steps: [
      { emoji: '🧠', label: 'Theory', time: '2 min', detail: 'Read today\'s theme and think about it' },
      { emoji: '🤜', label: 'Ball-Handling', time: '4 min', detail: 'Full ball-handling drill from today\'s session' },
      { emoji: '🎯', label: 'Shooting', time: '6 min', detail: 'Today\'s shooting drill — track your makes' },
      { emoji: '🛡️', label: 'Footwork', time: '4 min', detail: 'Today\'s footwork or defensive drill' },
      { emoji: '📓', label: 'Journal', time: '2 min', detail: 'Confidence journal entry' },
      { emoji: '🧘', label: 'Stretch', time: '2 min', detail: 'Quick 2-minute cooldown stretch' },
    ],
  },
  {
    duration: '45',
    title: '45-Minute Academy',
    subtitle: 'Full Mamba Mode — all 7 stations',
    emoji: '🐍',
    color: 'from-mamba to-purple',
    steps: [
      { emoji: '🧠', label: 'Theory', time: '5 min', detail: 'Read and think about today\'s theme — visualize applying it' },
      { emoji: '🤜', label: 'Ball-Handling', time: '8 min', detail: 'Full drill + add your own variations' },
      { emoji: '🎯', label: 'Shooting', time: '10 min', detail: 'Today\'s drill + 5-spot shooting challenge' },
      { emoji: '🛡️', label: 'Footwork / Defense', time: '7 min', detail: 'Today\'s footwork drill at full intensity' },
      { emoji: '💪', label: 'Conditioning', time: '7 min', detail: 'Today\'s strength/conditioning circuit' },
      { emoji: '📓', label: 'Journal', time: '5 min', detail: 'Full journal response — write as much as you feel' },
      { emoji: '🧘', label: 'Stretch & Cooldown', time: '3 min', detail: 'Full cooldown stretch — you earned it' },
    ],
  },
]

export default function TrainingPlans() {
  const [selected, setSelected] = useState<Plan | null>(null)

  if (selected) {
    return (
      <div className="min-h-screen court-texture pb-20 flex flex-col">
        <div className={`bg-gradient-to-r ${selected.color} px-4 pt-8 pb-5`}>
          <button onClick={() => setSelected(null)} className="text-white/70 text-sm mb-3">‹ Back</button>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{selected.emoji}</span>
            <div>
              <h2 className="text-2xl font-black text-white">{selected.title}</h2>
              <p className="text-white/70 text-sm">{selected.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 py-4">
          <div className="bg-court-mid border border-gray-800 rounded-2xl p-4 mb-4">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Total Time</p>
            <p className="text-white font-black text-2xl">{selected.duration} minutes</p>
          </div>

          <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Your Plan</p>
          <div className="space-y-3">
            {selected.steps.map((step, i) => (
              <div key={i} className="bg-court-mid border border-gray-800 rounded-xl p-4 flex gap-3">
                <div className="flex flex-col items-center">
                  <span className="text-2xl">{step.emoji}</span>
                  {i < selected.steps.length - 1 && (
                    <div className="w-px bg-gray-700 flex-1 mt-2 min-h-4" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <p className="font-bold text-white">{step.label}</p>
                    <span className="text-xs bg-gray-800 px-2 py-0.5 rounded-full text-gray-300">{step.time}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-court-mid border border-gold/30 rounded-xl p-4">
            <p className="text-gold font-bold mb-1">💡 Pro tip</p>
            <p className="text-gray-300 text-sm">
              Use the Training tab for the full drill details. Come back here just to see your schedule.
              Champions follow the plan — no skipping stations!
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen court-texture pb-20">
      <div className="bg-court-mid px-4 pt-8 pb-4">
        <p className="text-gray-400 text-sm">⏱️ Choose Your Grind</p>
        <h2 className="text-2xl font-black text-white">Training Plans</h2>
        <p className="text-gray-400 text-sm mt-1">Pick based on how much time you have</p>
      </div>

      <div className="px-4 py-4 space-y-4">
        {PLANS.map(plan => (
          <button
            key={plan.duration}
            onClick={() => setSelected(plan)}
            className={`w-full bg-gradient-to-r ${plan.color} rounded-2xl p-5 text-left active:scale-95 transition-transform`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{plan.emoji}</span>
              <div>
                <p className="text-white font-black text-xl">{plan.title}</p>
                <p className="text-white/70 text-sm">{plan.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {plan.steps.slice(0, 5).map((s, i) => (
                  <span key={i} className="text-lg">{s.emoji}</span>
                ))}
                {plan.steps.length > 5 && (
                  <span className="text-white/60 text-sm">+{plan.steps.length - 5}</span>
                )}
              </div>
              <span className="text-white/80 font-bold">{plan.duration} min ›</span>
            </div>
          </button>
        ))}

        <div className="bg-court-mid border border-gray-800 rounded-2xl p-4 text-center">
          <p className="text-2xl mb-2">💬</p>
          <p className="text-white font-bold mb-1">Not sure which to pick?</p>
          <p className="text-gray-400 text-sm">
            If you have less than 15 minutes → 10-Minute Hustle<br />
            Regular practice → 20-Minute Grind<br />
            Game week preparation → 45-Minute Academy
          </p>
        </div>
      </div>
    </div>
  )
}
