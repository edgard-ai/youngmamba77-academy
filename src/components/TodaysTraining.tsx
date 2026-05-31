import React, { useState } from 'react'
import type { GameProgress, Drill } from '../types'
import { getTodayTraining } from '../data/dailyTraining'

interface Props {
  progress: GameProgress
  onCompleteDay: (date: string) => void
  onRecordDrill: (type: string) => void
  onJournal: (text: string, date: string) => void
  onAddXP: (xp: number) => void
}

type Step = 'intro' | 'theory' | 'bh' | 'shoot' | 'footwork' | 'conditioning' | 'stretch' | 'journal' | 'done'

const STEP_ORDER: Step[] = ['intro', 'theory', 'bh', 'shoot', 'footwork', 'conditioning', 'stretch', 'journal', 'done']

export default function TodaysTraining({ progress, onCompleteDay, onRecordDrill, onJournal, onAddXP }: Props) {
  const today = new Date().toISOString().split('T')[0]
  const alreadyDone = progress.completedDays.includes(today)

  const training = getTodayTraining(progress.completedDays)
  const [step, setStep] = useState<Step>(alreadyDone ? 'done' : 'intro')
  const [journalText, setJournalText] = useState('')
  const [journalSubmitted, setJournalSubmitted] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<Set<Step>>(new Set())

  const dayNum = (progress.completedDays.length % 7) + 1

  function nextStep(current: Step) {
    const idx = STEP_ORDER.indexOf(current)
    const next = STEP_ORDER[idx + 1]
    if (!next) return

    setCompletedSteps(s => new Set([...s, current]))

    if (current === 'bh') onRecordDrill('ball-handling')
    if (current === 'shoot') onRecordDrill('shooting')
    if (current === 'footwork') onRecordDrill('footwork')
    if (current === 'conditioning') onRecordDrill('strength')
    if (current === 'stretch') onRecordDrill('stretch')

    if (next === 'done') {
      onCompleteDay(today)
      onAddXP(10) // bonus XP for completing all steps
    }

    setStep(next)
  }

  function submitJournal() {
    if (!journalText.trim()) return
    onJournal(journalText.trim(), today)
    setJournalSubmitted(true)
    nextStep('journal')
  }

  const drillCard = (drill: Drill, stepKey: Step, label: string, emoji: string, color: string) => (
    <div className="min-h-screen court-texture pb-20 flex flex-col">
      <div className="bg-court-mid px-4 pt-8 pb-4">
        <p className="text-gray-400 text-sm">{emoji} {label}</p>
        <h2 className="text-2xl font-black text-white">{drill.name}</h2>
        <span className="inline-block mt-1 px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">
          ⏱ {drill.duration}
        </span>
      </div>

      <div className="flex-1 px-4 py-4">
        <div className={`rounded-2xl border ${color} bg-court-mid p-5 mb-4`}>
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Instructions</p>
          <p className="text-white leading-relaxed">{drill.instructions}</p>
        </div>

        <div className="bg-court-mid border border-gray-800 rounded-xl p-4 mb-4">
          <p className="text-gold text-xs uppercase tracking-wider mb-1">XP Reward</p>
          <p className="text-white font-bold">+15 XP for completing this drill</p>
        </div>
      </div>

      <div className="px-4">
        <button
          onClick={() => { onAddXP(15); nextStep(stepKey) }}
          className="w-full bg-gradient-to-r from-mamba to-mamba-bright rounded-2xl py-4 text-white font-black text-lg active:scale-95 transition-transform shadow-mamba"
        >
          Done! Next ➜
        </button>
      </div>
    </div>
  )

  if (step === 'done' || alreadyDone) {
    return (
      <div className="min-h-screen court-texture flex flex-col items-center justify-center pb-20 px-4 text-center">
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-3xl font-black text-gold mb-2">Mission Complete!</h2>
        <p className="text-white/70 mb-2">Day {dayNum} in the books, Capi Capi.</p>
        <div className="bg-court-mid border border-gold rounded-2xl p-5 shadow-gold mb-6 w-full max-w-sm">
          <p className="text-gold font-black text-2xl">+50 XP</p>
          <p className="text-white/70 text-sm">+ bonus XP for every drill completed</p>
        </div>
        <p className="text-gray-400 italic text-sm">
          "The moment you give up is the moment you let someone else win."<br />
          <span className="text-gray-500">— Kobe Bryant</span>
        </p>
      </div>
    )
  }

  if (step === 'intro') {
    return (
      <div className="min-h-screen court-texture pb-20 flex flex-col">
        <div className="bg-court-mid px-4 pt-8 pb-4">
          <p className="text-gray-400 text-sm">🏀 Daily Mission</p>
          <h2 className="text-2xl font-black text-white">Day {dayNum} Training</h2>
        </div>
        <div className="flex-1 px-4 py-4">
          <div className="bg-gradient-to-br from-mamba to-purple-bright rounded-2xl p-5 mb-4">
            <p className="text-white/80 text-sm mb-2 uppercase tracking-wider">Today you'll complete:</p>
            {[
              { emoji: '🧠', label: "Theory Lesson" },
              { emoji: '🤜', label: "Ball-Handling Drill" },
              { emoji: '🎯', label: "Shooting Drill" },
              { emoji: '🛡️', label: "Footwork / Defense" },
              { emoji: '💪', label: "Conditioning" },
              { emoji: '🧘', label: "Stretch & Cooldown" },
              { emoji: '📓', label: "Confidence Journal" },
            ].map(({ emoji, label }) => (
              <div key={label} className="flex items-center gap-2 py-1.5 border-b border-white/10 last:border-0">
                <span className="text-xl">{emoji}</span>
                <span className="text-white/90 text-sm">{label}</span>
              </div>
            ))}
          </div>
          <div className="bg-court-mid border border-gold rounded-xl p-4 mb-4">
            <p className="text-gold font-bold">Total potential: +50 XP + bonuses</p>
            <p className="text-gray-400 text-sm">Complete everything to earn max XP</p>
          </div>
        </div>
        <div className="px-4">
          <button
            onClick={() => setStep('theory')}
            className="w-full bg-gradient-to-r from-mamba to-mamba-bright rounded-2xl py-4 text-white font-black text-xl active:scale-95 transition-transform shadow-mamba"
          >
            🏀 Let's Get It!
          </button>
        </div>
      </div>
    )
  }

  if (step === 'theory') {
    return (
      <div className="min-h-screen court-texture pb-20 flex flex-col">
        <div className="bg-court-mid px-4 pt-8 pb-4">
          <p className="text-gray-400 text-sm">🧠 Theory Lesson</p>
          <h2 className="text-2xl font-black text-white">Today's Theme</h2>
        </div>
        <div className="flex-1 px-4 py-4">
          <div className="bg-court-mid border border-blue-800 rounded-2xl p-5 mb-4">
            <p className="text-white leading-relaxed text-lg">{training.theory}</p>
          </div>
          <div className="bg-court-mid border border-gray-800 rounded-xl p-4">
            <p className="text-gold font-bold mb-1">Remember:</p>
            <p className="text-gray-300 text-sm">Champions study the game, not just play it. Understanding WHY makes every drill 10x more effective.</p>
          </div>
        </div>
        <div className="px-4">
          <button
            onClick={() => nextStep('theory')}
            className="w-full bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl py-4 text-white font-black text-lg active:scale-95 transition-transform"
          >
            Got It! ➜ Ball-Handling
          </button>
        </div>
      </div>
    )
  }

  if (step === 'bh') return drillCard(training.ballHandling, 'bh', 'Ball-Handling', '🤜', 'border-orange-800')
  if (step === 'shoot') return drillCard(training.shooting, 'shoot', 'Shooting', '🎯', 'border-yellow-800')
  if (step === 'footwork') return drillCard(training.footwork, 'footwork', 'Footwork / Defense', '🛡️', 'border-blue-800')
  if (step === 'conditioning') return drillCard(training.conditioning, 'conditioning', 'Conditioning', '💪', 'border-red-800')
  if (step === 'stretch') return drillCard(training.stretch, 'stretch', 'Stretch & Cooldown', '🧘', 'border-green-800')

  if (step === 'journal') {
    return (
      <div className="min-h-screen court-texture pb-20 flex flex-col">
        <div className="bg-court-mid px-4 pt-8 pb-4">
          <p className="text-gray-400 text-sm">📓 Confidence Journal</p>
          <h2 className="text-2xl font-black text-white">Mamba Mentality</h2>
        </div>
        <div className="flex-1 px-4 py-4">
          <div className="bg-court-mid border border-purple-800 rounded-2xl p-5 mb-4">
            <p className="text-purple-300 text-xs uppercase tracking-wider mb-2">Today's Question</p>
            <p className="text-white text-lg font-medium">{training.journalQuestion}</p>
          </div>
          <textarea
            value={journalText}
            onChange={e => setJournalText(e.target.value)}
            placeholder="Write your answer here..."
            rows={6}
            className="w-full bg-court-mid border border-gray-700 rounded-xl p-4 text-white placeholder-gray-600 focus:border-gold focus:outline-none resize-none text-sm mb-4"
            style={{ userSelect: 'text' }}
          />
          <div className="bg-court-mid border border-gray-800 rounded-xl p-3 mb-4">
            <p className="text-gold text-xs">+15 XP for completing your journal</p>
          </div>
        </div>
        <div className="px-4">
          <button
            onClick={submitJournal}
            disabled={!journalText.trim()}
            className="w-full bg-gradient-to-r from-purple-700 to-purple-900 rounded-2xl py-4 text-white font-black text-lg active:scale-95 transition-transform disabled:opacity-40"
          >
            {journalSubmitted ? 'Submitted! ✓' : 'Submit Journal ➜'}
          </button>
        </div>
      </div>
    )
  }

  return null
}
