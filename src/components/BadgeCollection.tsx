import React from 'react'
import type { GameProgress } from '../types'
import { BADGES, LEVELS, getLevel } from '../data/badges'

interface Props {
  progress: GameProgress
}

export default function BadgeCollection({ progress }: Props) {
  const currentLevel = getLevel(progress.xp)

  return (
    <div className="min-h-screen court-texture pb-20">
      <div className="bg-court-mid px-4 pt-8 pb-4">
        <p className="text-gray-400 text-sm">🏅 Your Achievements</p>
        <h2 className="text-2xl font-black text-white">Badge Collection</h2>
        <p className="text-gray-400 text-sm mt-1">
          {progress.unlockedBadges.length}/{BADGES.length} earned
        </p>
      </div>

      {/* Level Progress */}
      <div className="px-4 mb-4">
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Level Path</p>
        <div className="bg-court-mid border border-gray-800 rounded-2xl p-4">
          <div className="flex justify-between mb-3">
            {LEVELS.map((lvl, i) => (
              <div
                key={lvl.name}
                className={`flex flex-col items-center flex-1 ${i <= currentLevel.index ? lvl.color : 'text-gray-700'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border-2 ${
                  i < currentLevel.index ? 'border-current bg-current/20' :
                  i === currentLevel.index ? 'border-current bg-current/30 ring-2 ring-current ring-offset-1 ring-offset-court-mid' :
                  'border-gray-800 bg-gray-900'
                }`}>
                  {i < currentLevel.index ? '✓' : i + 1}
                </div>
                <span className="text-xs mt-1 text-center leading-tight hidden sm:block">
                  {lvl.name.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className={`font-black ${currentLevel.color}`}>{currentLevel.name}</p>
            <p className="text-gray-400 text-xs">{progress.xp} XP total</p>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="px-4">
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Badges</p>
        <div className="grid grid-cols-2 gap-3">
          {BADGES.map(badge => {
            const earned = progress.unlockedBadges.includes(badge.id)
            return (
              <div
                key={badge.id}
                className={`rounded-2xl p-4 border transition-all ${
                  earned
                    ? 'bg-gradient-to-br from-yellow-900/50 to-yellow-800/20 border-gold shadow-gold'
                    : 'bg-court-mid border-gray-800 opacity-50'
                }`}
              >
                <div className="text-3xl mb-2">
                  {earned ? badge.emoji : '🔒'}
                </div>
                <p className={`font-black text-sm ${earned ? 'text-gold' : 'text-gray-500'}`}>
                  {badge.name}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {badge.unlockCondition}
                </p>
                {earned && (
                  <p className="text-xs text-gold/70 mt-1">+{badge.xpReward} XP earned</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
