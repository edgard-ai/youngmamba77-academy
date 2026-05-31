import React, { useState } from 'react'
import type { GameProgress, Drill } from '../types'
import { getTodayTraining } from '../data/dailyTraining'
import DrillTimer from './DrillTimer'
import SessionStats from './SessionStats'

interface Props {
  progress: GameProgress
  onCompleteDay: (date: string) => void
  onRecordDrill: (type: string) => void
  onJournal: (text: string, date: string) => void
  onAddXP: (xp: number) => void
  onNav: (v: string) => void
}

type Step = 'intro' | 'theory' | 'bh' | 'shoot' | 'footwork' | 'conditioning' | 'stretch' | 'journal' | 'stats'

const STEP_ORDER: Step[] = ['intro', 'theory', 'bh', 'shoot', 'footwork', 'conditioning', 'stretch', 'journal', 'stats']

function parseDuration(dur: string): number {
  const match = dur.match(/(\d+)/)
  const mins = match ? parseInt(match[1]) : 3
  return mins * 60
}

function getMakeTarget(drillType: string): number {
  if (drillType === 'shooting') return 10
  if (drillType === 'ball-handling') return 20
  if (drillType === 'footwork') return 8
  if (drillType === 'strength') return 12
  return 5
}

function getEliteTip(type: string): string {
  if (type === 'shooting') return 'Track your makes. If you hit above 70%, push to harder spots next time.'
  if (type === 'ball-handling') return 'No looking at the ball. Eyes up the whole drill — that\'s the difference between good and elite.'
  if (type === 'footwork') return 'Game speed from rep 1. Slow practice = slow game.'
  if (type === 'strength') return 'Control the movement — don\'t rush. Power comes from control.'
  return 'Breathe into each stretch. Flexibility = injury prevention = more seasons.'
}

function DrillCard({ drill, stepKey, label, emoji, borderColor, onNext, onRecordDrill, onAddXP }: {
  drill: Drill
  stepKey: Step
  label: string
  emoji: string
  borderColor: string
  onNext: (makes: number, xp: number) => void
  onRecordDrill: (type: string) => void
  onAddXP: (xp: number) => void
}) {
  const [showTimer, setShowTimer] = useState(false)
  const makeTarget = getMakeTarget(drill.type)
  const duration = parseDuration(drill.duration)

  return (
    <div className="min-h-screen court-texture pb-20 flex flex-col">
      <div className="bg-court-mid px-4 pt-8 pb-4">
        <p className="text-gray-400 text-sm">{emoji} {label}</p>
        <h2 className="text-xl font-black text-white">{drill.name}</h2>
        <span className="inline-block mt-1 px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">
          ⏱ {drill.duration}
        </span>
      </div>

      <div className="flex-1 px-4 py-3">
        {!showTimer ? (
          <>
            <div className={`rounded-2xl border ${borderColor} bg-court-mid p-4 mb-3`}>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Instructions</p>
              <p className="text-white/90 leading-relaxed text-sm">{drill.instructions}</p>
            </div>
            <div className="bg-court-mid border border-gray-800 rounded-xl p-3 mb-3 flex justify-between items-center">
              <div>
                <p className="text-gold text-xs uppercase tracking-wider">XP</p>
                <p className="text-white font-bold text-sm">+15 XP • Bonus +10 if you hit {makeTarget} makes</p>
              </div>
              <span className="text-2xl">🎯</span>
            </div>
            <div className="bg-court-mid border border-blue-900/50 rounded-xl p-3">
              <p className="text-blue-300 text-xs font-bold mb-1">🐍 Elite Tip</p>
              <p className="text-gray-300 text-xs">{getEliteTip(drill.type)}</p>
            </div>
          </>
        ) : (
          <DrillTimer
            durationSeconds={duration}
            drillName={drill.name}
            makeTarget={makeTarget}
            onComplete={(makes) => {
              const hitTarget = makes >= makeTarget
              const xp = 15 + (hitTarget ? 10 : 0)
              onAddXP(xp)
              onRecordDrill(drill.type)
              onNext(makes, xp)
            }}
          />
        )}
      </div>

      {!showTimer && (
        <div className="px-4">
          <button
            onClick={() => setShowTimer(true)}
            className="w-full bg-gradient-to-r from-mamba to-mamba-bright rounded-2xl py-4 text-white font-black text-lg active:scale-95 transition-transform shadow-mamba"
          >
            ▶ Start with Timer
          </button>
          <button
            onClick={() => {
              onAddXP(15)
              onRecordDrill(drill.type)
              onNext(0, 15)
            }}
            className="w-full mt-2 py-2 text-gray-500 text-sm"
          >
            Skip timer — mark done
          </button>
        </div>
      )}
    </div>
  )
}

export default function TodaysTraining({ progress, onCompleteDay, onRecordDrill, onJournal, onAddXP, onNav }: Props) {
  const today = new Date().toISOString().split('T')[0]
  const alreadyDone = progress.completedDays.includes(today)

  const training = getTodayTraining(progress.completedDays)
  const [step, setStep] = useState<Step>(alreadyDone ? 'stats' : 'intro')
  const [journalText, setJournalText] = useState('')
  const [sessionMakes, setSessionMakes] = useState(0)
  const [sessionXP, setSessionXP] = useState(0)
  const [drillsDone, setDrillsDone] = useState(0)

  const dayNum = (progress.completedDays.length % 7) + 1

  function advance(current: Step, makes = 0, xp = 0) {
    const idx = STEP_ORDER.indexOf(current)
    const next = STEP_ORDER[idx + 1]
    if (!next) return
    if (['bh', 'shoot', 'footwork', 'conditioning', 'stretch'].includes(current)) {
      setSessionMakes(m => m + makes)
      setSessionXP(x => x + xp)
      setDrillsDone(d => d + 1)
    }
    if (next === 'stats') {
      onCompleteDay(today)
      onAddXP(50)
      setSessionXP(x => x + 50)
    }
    setStep(next)
  }

  function submitJournal() {
    if (!journalText.trim()) return
    onJournal(journalText.trim(), today)
    onAddXP(15)
    setSessionXP(x => x + 15)
    advance('journal')
  }

  if (step === 'stats') {
    if (alreadyDone && drillsDone === 0) {
      return (
        <div className="min-h-screen court-texture flex flex-col items-center justify-center pb-20 px-4 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-3xl font-black text-gold mb-2">Mission Complete!</h2>
          <p className="text-white/70 mb-4">Already trained today, Capi Capi. Come back tomorrow.</p>
          <div className="bg-court-mid border border-gray-800 rounded-xl p-4 w-full max-w-sm">
            <p className="text-gold font-black">🔥 {progress.streak} Day Streak</p>
            <p className="text-gray-400 text-sm mt-1">Keep it going tomorrow</p>
          </div>
        </div>
      )
    }
    return (
      <SessionStats
        makes={sessionMakes}
        drillsCompleted={drillsDone}
        xpEarned={sessionXP}
        streak={progress.streak}
        onDone={() => onNav('dashboard')}
      />
    )
  }

  if (step === 'intro') {
    return (
      <div className="min-h-screen court-texture pb-20 flex flex-col">
        <div className="bg-court-mid px-4 pt-8 pb-4">
          <p className="text-gray-400 text-sm">🏀 Daily Mission</p>
          <h2 className="text-2xl font-black text-white">Day {dayNum} — Elite Training</h2>
          <p className="text-gray-400 text-sm mt-1">Calibrated for your level. No easy reps.</p>
        </div>
        <div className="flex-1 px-4 py-4">
          <div className="bg-gradient-to-br from-mamba to-purple-bright rounded-2xl p-5 mb-4">
            <p className="text-white/80 text-sm mb-2 uppercase tracking-wider">Today's 7 Stations</p>
            {[
              { emoji: '🧠', label: 'Theory', sub: 'Elite mindset context' },
              { emoji: '🤜', label: 'Ball-Handling', sub: 'Timed + tracked' },
              { emoji: '🎯', label: 'Shooting', sub: 'Make counter + target' },
              { emoji: '🛡️', label: 'Footwork / Defense', sub: 'Game-speed reps' },
              { emoji: '💪', label: 'Conditioning', sub: 'Build the engine' },
              { emoji: '🧘', label: 'Stretch & Cooldown', sub: 'Champions recover' },
              { emoji: '📓', label: 'Confidence Journal', sub: 'Mamba mentality' },
            ].map(({ emoji, label, sub }) => (
              <div key={label} className="flex items-center gap-2 py-1.5 border-b border-white/10 last:border-0">
                <span className="text-xl">{emoji}</span>
                <div>
                  <span className="text-white/90 text-sm font-medium">{label}</span>
                  <span className="text-white/40 text-xs ml-2">{sub}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-court-mid border border-gold rounded-xl p-4 mb-3">
            <p className="text-gold font-bold">Potential: +100 XP today</p>
            <p className="text-gray-400 text-sm">+50 complete + +10 per drill target hit + +15 journal</p>
          </div>
          <div className="bg-court-mid border border-blue-900/50 rounded-xl p-3">
            <p className="text-blue-300 text-xs font-bold">🐍 Today's Standard</p>
            <p className="text-gray-300 text-sm mt-0.5">Every drill has a timer and a make target. Practice for games, not just practice.</p>
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
          <p className="text-gray-400 text-sm">🧠 Mindset</p>
          <h2 className="text-2xl font-black text-white">Today's Theme</h2>
        </div>
        <div className="flex-1 px-4 py-4">
          <div className="bg-court-mid border border-blue-800 rounded-2xl p-5 mb-4">
            <p className="text-white leading-relaxed">{training.theory}</p>
          </div>
          <div className="bg-court-mid border border-gray-800 rounded-xl p-4">
            <p className="text-gold font-bold mb-1">Before every rep today:</p>
            <p className="text-gray-300 text-sm">"Am I doing this at game speed? Would this work against a real defender?"</p>
          </div>
        </div>
        <div className="px-4">
          <button onClick={() => advance('theory')}
            className="w-full bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl py-4 text-white font-black text-lg active:scale-95 transition-transform"
          >
            Got It — Start Ball-Handling ➜
          </button>
        </div>
      </div>
    )
  }

  if (step === 'bh') return <DrillCard drill={training.ballHandling} stepKey="bh" label="Ball-Handling" emoji="🤜" borderColor="border-orange-800" onNext={(m, x) => advance('bh', m, x)} onRecordDrill={onRecordDrill} onAddXP={onAddXP} />
  if (step === 'shoot') return <DrillCard drill={training.shooting} stepKey="shoot" label="Shooting" emoji="🎯" borderColor="border-yellow-800" onNext={(m, x) => advance('shoot', m, x)} onRecordDrill={onRecordDrill} onAddXP={onAddXP} />
  if (step === 'footwork') return <DrillCard drill={training.footwork} stepKey="footwork" label="Footwork / Defense" emoji="🛡️" borderColor="border-blue-800" onNext={(m, x) => advance('footwork', m, x)} onRecordDrill={onRecordDrill} onAddXP={onAddXP} />
  if (step === 'conditioning') return <DrillCard drill={training.conditioning} stepKey="conditioning" label="Conditioning" emoji="💪" borderColor="border-red-800" onNext={(m, x) => advance('conditioning', m, x)} onRecordDrill={onRecordDrill} onAddXP={onAddXP} />
  if (step === 'stretch') return <DrillCard drill={training.stretch} stepKey="stretch" label="Stretch & Cooldown" emoji="🧘" borderColor="border-green-800" onNext={(m, x) => advance('stretch', m, x)} onRecordDrill={onRecordDrill} onAddXP={onAddXP} />

  if (step === 'journal') {
    return (
      <div className="min-h-screen court-texture pb-20 flex flex-col">
        <div className="bg-court-mid px-4 pt-8 pb-4">
          <p className="text-gray-400 text-sm">📓 Confidence Journal</p>
          <h2 className="text-2xl font-black text-white">Last Rep — Mindset</h2>
        </div>
        <div className="flex-1 px-4 py-4">
          <div className="bg-court-mid border border-purple-800 rounded-2xl p-5 mb-4">
            <p className="text-purple-300 text-xs uppercase tracking-wider mb-2">Today's Question</p>
            <p className="text-white text-lg font-medium">{training.journalQuestion}</p>
          </div>
          <textarea value={journalText} onChange={e => setJournalText(e.target.value)}
            placeholder="Be real with yourself. No coach is reading this — it's just you."
            rows={5}
            className="w-full bg-court-mid border border-gray-700 rounded-xl p-4 text-white placeholder-gray-600 focus:border-gold focus:outline-none resize-none text-sm mb-3"
            style={{ userSelect: 'text' }}
          />
          <div className="bg-court-mid border border-gray-800 rounded-xl p-3">
            <p className="text-gold text-xs">+15 XP • This is what separates good players from great ones</p>
          </div>
        </div>
        <div className="px-4">
          <button onClick={submitJournal} disabled={!journalText.trim()}
            className="w-full bg-gradient-to-r from-purple-700 to-purple-900 rounded-2xl py-4 text-white font-black text-lg active:scale-95 transition-transform disabled:opacity-40"
          >
            Submit + See Stats ➜
          </button>
        </div>
      </div>
    )
  }

  return null
}
