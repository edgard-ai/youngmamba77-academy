import React from 'react'
import type { GameProgress } from '../types'
import type { View } from '../types'
import { BADGES, getLevel, getLevelProgress } from '../data/badges'

interface Props {
  progress: GameProgress
  onNav: (v: View) => void
}

export default function Dashboard({ progress, onNav }: Props) {
  const level = getLevel(progress.xp)
  const levelPct = getLevelProgress(progress.xp)
  const nextLevel = level.index < 5
    ? ['Rookie', 'Starter', 'Playmaker', 'All-Star', 'Young Mamba', 'Legend #77'][level.index + 1]
    : null

  const today = new Date().toISOString().split('T')[0]
  const trainedToday = progress.completedDays.includes(today)
  const totalTrainingDays = progress.completedDays.length

  const unlockedCount = progress.unlockedBadges.length
  const totalBadges = BADGES.length

  return (
    <div className="min-h-screen court-texture pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-court-mid to-transparent px-4 pt-8 pb-4">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-gray-400 text-sm">🐍 Young Mamba 77 Academy</p>
            <h1 className="text-2xl font-bold text-white">
              Today's Mission,{' '}
              <span className="text-gold">Capi Capi</span> 👑
            </h1>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-gold">#77</div>
          </div>
        </div>
      </div>

      {/* Level Card */}
      <div className="mx-4 mb-4">
        <div className={`rounded-2xl p-4 bg-gradient-to-r ${level.bg} shadow-gold`}>
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-xs text-white/70 uppercase tracking-wider">Current Level</p>
              <p className="text-xl font-black text-white">{level.name}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/70">Total XP</p>
              <p className="text-2xl font-black text-white">{progress.xp.toLocaleString()}</p>
            </div>
          </div>
          <div className="w-full bg-black/30 rounded-full h-3 mb-1">
            <div
              className="bg-white rounded-full h-3 transition-all duration-1000"
              style={{ width: `${levelPct}%` }}
            />
          </div>
          {nextLevel && (
            <p className="text-xs text-white/60 text-right">Next: {nextLevel}</p>
          )}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mx-4 mb-4">
        <div className="bg-court-mid rounded-xl p-3 text-center border border-gray-800">
          <div className="text-2xl font-black text-orange-400">
            {progress.streak}
          </div>
          <div className="text-xs text-gray-400">🔥 Day Streak</div>
        </div>
        <div className="bg-court-mid rounded-xl p-3 text-center border border-gray-800">
          <div className="text-2xl font-black text-blue-400">
            {totalTrainingDays}
          </div>
          <div className="text-xs text-gray-400">🏋️ Days Trained</div>
        </div>
        <div className="bg-court-mid rounded-xl p-3 text-center border border-gray-800">
          <div className="text-2xl font-black text-purple-400">
            {unlockedCount}/{totalBadges}
          </div>
          <div className="text-xs text-gray-400">🏅 Badges</div>
        </div>
      </div>

      {/* Start Training CTA */}
      <div className="mx-4 mb-4">
        {trainedToday ? (
          <div className="bg-green-900/40 border border-green-700 rounded-2xl p-4 text-center">
            <div className="text-3xl mb-1">✅</div>
            <p className="text-green-400 font-bold">Mission Complete!</p>
            <p className="text-green-300/70 text-sm">You trained today. Come back tomorrow, Capi Capi.</p>
          </div>
        ) : (
          <button
            onClick={() => onNav('training')}
            className="w-full bg-gradient-to-r from-mamba to-mamba-bright rounded-2xl p-5 text-center shadow-mamba active:scale-95 transition-transform"
          >
            <div className="text-4xl mb-2">🏀</div>
            <p className="text-white font-black text-xl">Start Today's Training</p>
            <p className="text-red-200 text-sm mt-1">+50 XP waiting for you</p>
          </button>
        )}
      </div>

      {/* Quick Actions */}
      <div className="mx-4 mb-4">
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2 px-1">Quick Access</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onNav('school')}
            className="bg-court-mid border border-gray-800 rounded-xl p-4 text-left active:bg-gray-800 transition-colors"
          >
            <div className="text-2xl mb-1">📚</div>
            <div className="font-bold text-white text-sm">Basketball School</div>
            <div className="text-xs text-gray-400">
              {progress.completedLessons.length}/15 lessons
            </div>
          </button>
          <button
            onClick={() => onNav('pregame')}
            className="bg-court-mid border border-gray-800 rounded-xl p-4 text-left active:bg-gray-800 transition-colors"
          >
            <div className="text-2xl mb-1">⚡</div>
            <div className="font-bold text-white text-sm">Pregame Routine</div>
            <div className="text-xs text-gray-400">
              Get locked in before the game
            </div>
          </button>
          <button
            onClick={() => onNav('plans')}
            className="bg-court-mid border border-gray-800 rounded-xl p-4 text-left active:bg-gray-800 transition-colors"
          >
            <div className="text-2xl mb-1">⏱️</div>
            <div className="font-bold text-white text-sm">Training Plans</div>
            <div className="text-xs text-gray-400">10, 20, or 45 minutes</div>
          </button>
          <button
            onClick={() => onNav('badges')}
            className="bg-court-mid border border-gray-800 rounded-xl p-4 text-left active:bg-gray-800 transition-colors"
          >
            <div className="text-2xl mb-1">🏅</div>
            <div className="font-bold text-white text-sm">My Badges</div>
            <div className="text-xs text-gray-400">
              {unlockedCount} earned
            </div>
          </button>
        </div>
      </div>

      {/* Inspiration Quote */}
      <div className="mx-4 mb-4 bg-court-mid border border-yellow-900/50 rounded-xl p-4">
        <p className="text-gold text-xs uppercase tracking-wider mb-1">🐍 Mamba Quote</p>
        <p className="text-white/80 text-sm italic">
          "The moment you give up is the moment you let someone else win."
        </p>
        <p className="text-gray-500 text-xs mt-1">— Kobe Bryant</p>
      </div>

      {/* Jersey Banner */}
      <div className="mx-4 mb-4 text-center">
        <div className="inline-block border-2 border-gold rounded-xl px-6 py-3 shadow-gold">
          <span className="text-gold font-black text-lg">Young Mamba • #77 • Capi Capi</span>
        </div>
      </div>
    </div>
  )
}
