import React, { useState } from 'react'
import type { GameProgress } from '../types'
import { getLevel } from '../data/badges'
import { LESSONS } from '../data/lessons'

interface Props {
  progress: GameProgress
  onUpdateNotes: (notes: string) => void
  onReset: () => void
}

export default function ParentDashboard({ progress, onUpdateNotes, onReset }: Props) {
  const [notes, setNotes] = useState(progress.parentNotes)
  const [notesSaved, setNotesSaved] = useState(false)
  const [showReset, setShowReset] = useState(false)
  const level = getLevel(progress.xp)

  function saveNotes() {
    onUpdateNotes(notes)
    setNotesSaved(true)
    setTimeout(() => setNotesSaved(false), 2000)
  }

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (6 - i))
    return d.toISOString().split('T')[0]
  })

  const skillBreakdown = [
    { label: 'Ball-Handling', icon: '🤜', count: progress.drillCounts['ball-handling'] || 0 },
    { label: 'Shooting', icon: '🎯', count: progress.drillCounts['shooting'] || 0 },
    { label: 'Footwork/Defense', icon: '🛡️', count: progress.drillCounts['footwork'] || 0 },
    { label: 'Strength', icon: '💪', count: progress.drillCounts['strength'] || 0 },
    { label: 'Flexibility', icon: '🧘', count: progress.drillCounts['stretch'] || 0 },
  ]

  const totalDrills = skillBreakdown.reduce((a, s) => a + s.count, 0)

  const completedLessonsData = LESSONS.filter(l => progress.completedLessons.includes(l.id))

  return (
    <div className="min-h-screen court-texture pb-20">
      <div className="bg-court-mid px-4 pt-8 pb-4">
        <p className="text-gray-400 text-sm">👁️ Coach/Parent View</p>
        <h2 className="text-2xl font-black text-white">Thomas's Progress</h2>
        <p className="text-gray-400 text-sm">#77 • Young Mamba • Capi Capi</p>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-court-mid border border-gray-800 rounded-xl p-4">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Level</p>
            <p className={`font-black text-lg ${level.color}`}>{level.name}</p>
            <p className="text-gold font-bold">{progress.xp} XP</p>
          </div>
          <div className="bg-court-mid border border-gray-800 rounded-xl p-4">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Streak</p>
            <p className="text-orange-400 font-black text-2xl">{progress.streak} 🔥</p>
            <p className="text-gray-400 text-xs">days in a row</p>
          </div>
          <div className="bg-court-mid border border-gray-800 rounded-xl p-4">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Training Days</p>
            <p className="text-blue-400 font-black text-2xl">{progress.completedDays.length}</p>
            <p className="text-gray-400 text-xs">total sessions</p>
          </div>
          <div className="bg-court-mid border border-gray-800 rounded-xl p-4">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Lessons</p>
            <p className="text-purple-400 font-black text-2xl">{progress.completedLessons.length}/15</p>
            <p className="text-gray-400 text-xs">completed</p>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="bg-court-mid border border-gray-800 rounded-2xl p-4">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Last 7 Days</p>
          <div className="flex justify-between gap-1">
            {last7Days.map(day => {
              const trained = progress.completedDays.includes(day)
              const dayLabel = new Date(day + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short' }).charAt(0)
              return (
                <div key={day} className="flex flex-col items-center gap-1 flex-1">
                  <div className={`w-full rounded-lg h-10 flex items-center justify-center ${
                    trained ? 'bg-gold' : 'bg-gray-800'
                  }`}>
                    {trained && <span className="text-black font-black text-xs">✓</span>}
                  </div>
                  <span className="text-gray-500 text-xs">{dayLabel}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Skills Practiced */}
        <div className="bg-court-mid border border-gray-800 rounded-2xl p-4">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Skills Practiced ({totalDrills} total drills)</p>
          <div className="space-y-2">
            {skillBreakdown.map(skill => (
              <div key={skill.label} className="flex items-center gap-3">
                <span className="text-xl w-8">{skill.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-0.5">
                    <span className="text-white text-sm">{skill.label}</span>
                    <span className="text-gray-400 text-sm">{skill.count} drills</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div
                      className="bg-gold rounded-full h-1.5 transition-all"
                      style={{ width: totalDrills > 0 ? `${(skill.count / Math.max(...skillBreakdown.map(s => s.count), 1)) * 100}%` : '0%' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="bg-court-mid border border-gray-800 rounded-2xl p-4">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
            Badges Earned ({progress.unlockedBadges.length})
          </p>
          {progress.unlockedBadges.length === 0 ? (
            <p className="text-gray-500 text-sm">No badges yet — keep training!</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {progress.unlockedBadges.map(id => (
                <span key={id} className="bg-yellow-900/40 border border-gold/50 rounded-full px-3 py-1 text-gold text-xs font-bold">
                  {id.replace(/-/g, ' ')}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Completed Lessons */}
        {completedLessonsData.length > 0 && (
          <div className="bg-court-mid border border-gray-800 rounded-2xl p-4">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
              School Lessons Completed ({completedLessonsData.length})
            </p>
            <div className="flex flex-wrap gap-1.5">
              {completedLessonsData.map(l => (
                <span key={l.id} className="bg-purple-900/40 border border-purple-700 rounded-full px-2 py-0.5 text-purple-300 text-xs">
                  {l.emoji} {l.title}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Journal Entries Count */}
        <div className="bg-court-mid border border-gray-800 rounded-2xl p-4">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Journal Entries</p>
          <p className="text-white font-bold">{progress.journalEntries.length} entries written</p>
          <p className="text-gray-400 text-xs mt-0.5">Building the Mamba mindset one entry at a time</p>
        </div>

        {/* Notes Section */}
        <div className="bg-court-mid border border-gray-800 rounded-2xl p-4">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Coach / Parent Notes</p>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Add observations, goals, or notes about Thomas's progress..."
            rows={4}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white placeholder-gray-600 focus:border-gold focus:outline-none resize-none text-sm"
            style={{ userSelect: 'text' }}
          />
          <button
            onClick={saveNotes}
            className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 text-white font-bold text-sm active:bg-gray-700 transition-colors"
          >
            {notesSaved ? '✓ Saved!' : 'Save Notes'}
          </button>
        </div>

        {/* Weekly Summary */}
        <div className="bg-gradient-to-br from-court-mid to-blue-900/20 border border-blue-900/50 rounded-2xl p-4">
          <p className="text-blue-300 text-xs uppercase tracking-wider mb-2">📊 Weekly Summary</p>
          <ul className="space-y-1 text-sm text-white/80">
            <li>• {last7Days.filter(d => progress.completedDays.includes(d)).length}/7 days trained this week</li>
            <li>• {totalDrills} total drills completed all-time</li>
            <li>• {progress.journalEntries.length} journal entries (mindset work)</li>
            <li>• {progress.pregameCompletions} pregame routines completed</li>
            <li>• {Math.round((progress.xp / 1500) * 100)}% of the way to Legend #77 level</li>
          </ul>
        </div>

        {/* Reset Button */}
        <div>
          {!showReset ? (
            <button
              onClick={() => setShowReset(true)}
              className="w-full border border-gray-700 rounded-xl py-3 text-gray-500 text-sm active:bg-gray-900"
            >
              Reset All Progress
            </button>
          ) : (
            <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
              <p className="text-red-300 font-bold mb-1">⚠️ This will erase everything</p>
              <p className="text-red-200/70 text-sm mb-3">All XP, badges, lessons, and journal entries will be deleted. This cannot be undone.</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowReset(false)}
                  className="flex-1 border border-gray-600 rounded-lg py-2 text-gray-300 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => { onReset(); setShowReset(false) }}
                  className="flex-1 bg-red-700 rounded-lg py-2 text-white font-bold text-sm"
                >
                  Yes, Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
