import React from 'react'
import type { GameProgress } from '../types'
import { BADGES, LEVELS, getLevel } from '../data/badges'

interface Props {
  progress: GameProgress
}

function getBadgeProgress(id: string, progress: GameProgress): { current: number; target: number } {
  switch (id) {
    case 'first-practice': return { current: progress.completedDays.length, target: 1 }
    case 'seven-day-streak': return { current: progress.streak, target: 7 }
    case 'handles-hero': return { current: progress.drillCounts['ball-handling'] || 0, target: 5 }
    case 'splash-shooter': return { current: progress.drillCounts['shooting'] || 0, target: 5 }
    case 'lockdown-defender': return { current: progress.drillCounts['footwork'] || 0, target: 5 }
    case 'young-mamba-mindset': return { current: progress.journalEntries.length, target: 7 }
    case 'capi-capi-captain': return { current: progress.pregameCompletions, target: 5 }
    case 'school-scholar': return { current: progress.completedLessons.length, target: 5 }
    case 'legend-77': return { current: progress.xp, target: 1500 }
    default: return { current: 0, target: 1 }
  }
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

      {/* Level Path */}
      <div className="px-4 mb-4">
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Level Path</p>
        <div className="bg-court-mid border border-gray-800 rounded-2xl p-4">
          <div className="flex justify-between mb-3">
            {LEVELS.map((lvl, i) => (
              <div key={lvl.name} className={`flex flex-col items-center flex-1 ${i <= currentLevel.index ? lvl.color : 'text-gray-700'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border-2 ${
                  i < currentLevel.index ? 'border-current bg-current/20' :
                  i === currentLevel.index ? 'border-current bg-current/30 ring-2 ring-current ring-offset-1 ring-offset-court-mid' :
                  'border-gray-800 bg-gray-900'
                }`}>
                  {i < currentLevel.index ? '✓' : i + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className={`font-black ${currentLevel.color}`}>{currentLevel.name}</p>
            <p className="text-gray-400 text-xs">{progress.xp} XP total</p>
          </div>
        </div>
      </div>

      {/* Badges with progress bars */}
      <div className="px-4">
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Badges</p>
        <div className="space-y-3">
          {BADGES.map(badge => {
            const earned = progress.unlockedBadges.includes(badge.id)
            const { current, target } = getBadgeProgress(badge.id, progress)
            const pct = Math.min(100, Math.round((current / target) * 100))

            return (
              <div key={badge.id} className={`rounded-2xl p-4 border transition-all ${
                earned
                  ? 'bg-gradient-to-r from-yellow-900/40 to-yellow-800/20 border-gold shadow-gold'
                  : 'bg-court-mid border-gray-800'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{earned ? badge.emoji : '🔒'}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className={`font-black text-sm ${earned ? 'text-gold' : 'text-gray-400'}`}>
                        {badge.name}
                      </p>
                      <p className={`text-xs font-bold ${earned ? 'text-gold' : 'text-gray-500'}`}>
                        {earned ? `+${badge.xpReward} XP ✓` : `${current}/${target}`}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">{badge.unlockCondition}</p>
                  </div>
                </div>
                {!earned && (
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className={`rounded-full h-2 transition-all ${pct >= 75 ? 'bg-gold' : pct >= 40 ? 'bg-blue-500' : 'bg-gray-600'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
