import React from 'react'

interface Props {
  makes: number
  drillsCompleted: number
  xpEarned: number
  streak: number
  onDone: () => void
}

export default function SessionStats({ makes, drillsCompleted, xpEarned, streak, onDone }: Props) {
  const accuracy = drillsCompleted > 0 ? Math.round((makes / Math.max(makes + 10, 30)) * 100) : 0

  const cards = [
    { label: 'XP Earned', value: `+${xpEarned}`, sub: 'this session', color: 'text-gold', bg: 'border-yellow-800' },
    { label: 'Makes', value: makes.toString(), sub: 'total today', color: 'text-green-400', bg: 'border-green-900' },
    { label: 'Drills Done', value: `${drillsCompleted}/6`, sub: 'stations', color: 'text-blue-400', bg: 'border-blue-900' },
    { label: 'Streak', value: streak.toString(), sub: 'days 🔥', color: 'text-orange-400', bg: 'border-orange-900' },
  ]

  return (
    <div className="min-h-screen court-texture pb-20 flex flex-col">
      <div className="bg-court-mid px-4 pt-8 pb-4">
        <p className="text-gray-400 text-sm">📊 Session Complete</p>
        <h2 className="text-2xl font-black text-white">Today's Stats</h2>
      </div>

      <div className="flex-1 px-4 py-4">
        {/* Trophy */}
        <div className="text-center mb-6">
          <div className="text-6xl mb-2">🏆</div>
          <p className="text-gold font-black text-xl">Mission Complete, Capi Capi!</p>
          <p className="text-gray-400 text-sm">Day logged. Come back tomorrow.</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {cards.map(card => (
            <div key={card.label} className={`bg-court-mid border ${card.bg} rounded-2xl p-4 text-center`}>
              <p className={`text-3xl font-black ${card.color}`}>{card.value}</p>
              <p className="text-gray-400 text-xs mt-0.5">{card.label}</p>
              <p className="text-gray-600 text-xs">{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-r from-mamba/30 to-purple-bright/20 border border-red-900/40 rounded-xl p-4 mb-4">
          <p className="text-white/80 italic text-sm">
            "Hard work beats talent when talent doesn't work hard."
          </p>
          <p className="text-gray-500 text-xs mt-1">— Tim Notke (remembered by Kevin Durant)</p>
        </div>

        {/* Next session teaser */}
        <div className="bg-court-mid border border-gray-800 rounded-xl p-3 text-center">
          <p className="text-gray-400 text-xs">Tomorrow's mission drops at midnight</p>
          <p className="text-white font-bold text-sm mt-0.5">Day {streak + 1} coming soon 🐍</p>
        </div>
      </div>

      <div className="px-4">
        <button
          onClick={onDone}
          className="w-full bg-gradient-to-r from-gold to-yellow-500 rounded-2xl py-4 text-black font-black text-xl active:scale-95 transition-transform"
        >
          Back to Academy
        </button>
      </div>
    </div>
  )
}
