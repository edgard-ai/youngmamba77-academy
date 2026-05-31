import React, { useState } from 'react'
import type { Lesson, GameProgress } from '../types'
import { LESSONS } from '../data/lessons'
import { ADVANCED_LESSONS } from '../data/advancedLessons'
import { TRACKS, getTrackUnlockStatus } from '../data/tracks'

const ALL_LESSONS: Lesson[] = [...LESSONS, ...ADVANCED_LESSONS]

interface Props {
  progress: GameProgress
  onCompleteLesson: (id: string, xp: number) => void
  onRecordDrill: (type: string) => void
  onAddXP: (xp: number) => void
}

const TRACK_ACCENT: Record<number, string> = {
  1: 'border-blue-700 text-blue-300',
  2: 'border-orange-700 text-orange-300',
  3: 'border-purple-700 text-purple-300',
  4: 'border-green-700 text-green-300',
  5: 'border-yellow-600 text-yellow-300',
}

export default function BasketballSchool({ progress, onCompleteLesson, onRecordDrill, onAddXP }: Props) {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [view, setView] = useState<'list' | 'lesson' | 'quiz'>('list')
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null)
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [completedDrills, setCompletedDrills] = useState<Set<string>>(new Set())

  const completedCount = progress.completedLessons.length
  const trackStatus = getTrackUnlockStatus(completedCount)

  function openLesson(lesson: Lesson) {
    setSelectedLesson(lesson)
    setView('lesson')
    setQuizAnswer(null)
    setQuizSubmitted(false)
    setCompletedDrills(new Set())
  }

  function submitQuiz() {
    if (quizAnswer === null || !selectedLesson) return
    setQuizSubmitted(true)
    const correct = selectedLesson.quiz.options[quizAnswer]?.correct
    if (correct) onAddXP(20)
    if (!progress.completedLessons.includes(selectedLesson.id)) {
      onCompleteLesson(selectedLesson.id, selectedLesson.xpReward)
    }
  }

  function completeDrill(drillId: string, drillType: string) {
    if (!completedDrills.has(drillId)) {
      setCompletedDrills(s => new Set([...s, drillId]))
      onRecordDrill(drillType)
      onAddXP(10)
    }
  }

  if (view === 'list' || !selectedLesson) {
    const totalLessons = ALL_LESSONS.length
    return (
      <div className="min-h-screen court-texture pb-20">
        <div className="bg-court-mid px-4 pt-8 pb-4">
          <p className="text-gray-400 text-sm">🏫 Tommy's Mastermind</p>
          <h2 className="text-2xl font-black text-white">Basketball School</h2>
          <p className="text-gray-400 text-sm mt-1">{completedCount}/{totalLessons} lessons — {Math.round((completedCount/totalLessons)*100)}% complete</p>
          <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
            <div className="bg-gold rounded-full h-2 transition-all" style={{ width: `${(completedCount/totalLessons)*100}%` }} />
          </div>
        </div>

        <div className="px-4 py-3 space-y-4">
          {TRACKS.map(track => {
            const unlocked = trackStatus[track.id]
            const trackLessons = ALL_LESSONS.filter(l => l.track === track.id)
            const trackCompleted = trackLessons.filter(l => progress.completedLessons.includes(l.id)).length

            return (
              <div key={track.id}>
                {/* Track header */}
                <div className={`rounded-2xl p-4 mb-2 bg-gradient-to-r ${track.color} ${!unlocked ? 'opacity-50' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{unlocked ? track.emoji : '🔒'}</span>
                        <div>
                          <p className="text-white font-black">{track.name}</p>
                          <p className="text-white/70 text-xs">{track.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-xs">{trackCompleted}/{trackLessons.length}</p>
                      {!unlocked && (
                        <p className="text-white/60 text-xs">Complete {track.unlockRequirement} lessons</p>
                      )}
                    </div>
                  </div>
                  {!unlocked && (
                    <div className="mt-2 w-full bg-black/30 rounded-full h-1.5">
                      <div className="bg-white/50 rounded-full h-1.5" style={{ width: `${Math.min(100, (completedCount/track.unlockRequirement)*100)}%` }} />
                    </div>
                  )}
                </div>

                {/* Lessons in track */}
                {unlocked && (
                  <div className="space-y-2 ml-1">
                    {trackLessons.map(lesson => {
                      const done = progress.completedLessons.includes(lesson.id)
                      const accent = TRACK_ACCENT[lesson.track] || 'border-gray-700 text-gray-400'
                      return (
                        <button key={lesson.id} onClick={() => openLesson(lesson)}
                          className="w-full bg-court-mid border border-gray-800 rounded-xl p-3 text-left active:bg-gray-800 flex items-center gap-3">
                          <span className="text-2xl">{lesson.emoji}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-white text-sm">{lesson.title}</span>
                              {done && <span className="text-green-400 text-xs">✓</span>}
                            </div>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span className={`text-xs px-1 py-0 rounded border ${accent}`}>{lesson.category}</span>
                              <span className="text-xs text-gray-500">+{lesson.xpReward} XP</span>
                            </div>
                          </div>
                          <span className="text-gray-600">›</span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const lesson = selectedLesson
  const done = progress.completedLessons.includes(lesson.id)
  const accent = TRACK_ACCENT[lesson.track] || 'border-gray-700'

  if (view === 'quiz') {
    return (
      <div className="min-h-screen court-texture pb-20 flex flex-col">
        <div className="bg-court-mid px-4 pt-8 pb-4">
          <button onClick={() => setView('lesson')} className="text-gray-400 text-sm mb-2">‹ Back</button>
          <p className="text-gray-400 text-sm">📝 Track {lesson.track} Knowledge Check</p>
          <h2 className="text-xl font-black text-white">{lesson.title}</h2>
        </div>
        <div className="flex-1 px-4 py-4">
          <div className="bg-court-mid border border-gray-800 rounded-2xl p-5 mb-4">
            <p className="text-white font-bold text-lg">{lesson.quiz.question}</p>
          </div>
          <div className="space-y-3 mb-4">
            {lesson.quiz.options.map((opt, i) => {
              let style = 'bg-court-mid border border-gray-700 text-white'
              if (quizSubmitted) {
                if (opt.correct) style = 'bg-green-900 border border-green-500 text-green-300'
                else if (quizAnswer === i) style = 'bg-red-900 border border-red-600 text-red-300'
                else style = 'bg-court-mid border border-gray-800 text-gray-500'
              } else if (quizAnswer === i) {
                style = 'bg-blue-900 border border-blue-500 text-white'
              }
              return (
                <button key={i} onClick={() => !quizSubmitted && setQuizAnswer(i)}
                  className={`w-full rounded-xl p-4 text-left font-medium ${style} active:opacity-80 transition-all`}>
                  <span className="mr-2">{['A','B','C','D'][i]}.</span>{opt.text}
                  {quizSubmitted && opt.correct && ' ✓'}
                </button>
              )
            })}
          </div>
          {quizSubmitted && (
            <div className={`rounded-xl p-4 mb-4 ${lesson.quiz.options[quizAnswer ?? 0]?.correct ? 'bg-green-900/40 border border-green-700' : 'bg-red-900/40 border border-red-700'}`}>
              <p className="font-bold text-white mb-1">{lesson.quiz.options[quizAnswer ?? 0]?.correct ? '🎉 Correct! +20 XP' : '❌ Not quite — re-read the lesson'}</p>
              <p className="text-white/70 text-sm">Correct: {lesson.quiz.options.find(o => o.correct)?.text}</p>
            </div>
          )}
        </div>
        <div className="px-4">
          {!quizSubmitted
            ? <button onClick={submitQuiz} disabled={quizAnswer === null} className="w-full bg-gradient-to-r from-gold to-yellow-600 rounded-2xl py-4 text-black font-black text-lg active:scale-95 transition-transform disabled:opacity-40">Submit Answer</button>
            : <button onClick={() => setView('list')} className="w-full bg-gradient-to-r from-mamba to-mamba-bright rounded-2xl py-4 text-white font-black text-lg active:scale-95 transition-transform shadow-mamba">Back to School 🏫</button>
          }
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen court-texture pb-20">
      <div className="bg-court-mid px-4 pt-8 pb-4">
        <button onClick={() => setView('list')} className="text-gray-400 text-sm mb-2">‹ All Lessons</button>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{lesson.emoji}</span>
          <div>
            <h2 className="text-xl font-black text-white">{lesson.title}</h2>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs px-1.5 py-0.5 rounded border ${TRACK_ACCENT[lesson.track]}`}>Track {lesson.track}</span>
              <span className="text-xs text-gray-500">{lesson.category}</span>
              <span className="text-xs text-gold">+{lesson.xpReward} XP</span>
              {done && <span className="text-green-400 text-xs font-bold">✓ Completed</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Full Explanation */}
        <div className="bg-court-mid border border-gray-800 rounded-2xl p-5">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">📖 Full Coaching Breakdown</p>
          {lesson.explanation.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-white/90 leading-relaxed text-sm mb-3 last:mb-0">{paragraph}</p>
          ))}
        </div>

        {/* Coaching Points */}
        <div className={`bg-court-mid border rounded-2xl p-5 ${accent}`}>
          <p className="text-xs uppercase tracking-wider mb-3 text-current opacity-80">🎯 Key Coaching Points</p>
          <ul className="space-y-2">
            {lesson.coachingPoints.map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-white/80">
                <span className="font-bold flex-shrink-0 text-current opacity-70">{i+1}.</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Common Mistakes */}
        <div className="bg-court-mid border border-red-900/40 rounded-2xl p-5">
          <p className="text-red-400 text-xs uppercase tracking-wider mb-3">⚠️ Common Mistakes to Avoid</p>
          <ul className="space-y-2">
            {lesson.commonMistakes.map((mistake, i) => (
              <li key={i} className="flex gap-2 text-sm text-white/80">
                <span className="text-red-400 flex-shrink-0">✗</span>
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Video Link */}
        <a href={lesson.videoUrl} target="_blank" rel="noopener noreferrer"
          className="block bg-gradient-to-r from-red-700 to-red-900 rounded-2xl p-4 active:opacity-80">
          <div className="flex items-center gap-3">
            <span className="text-3xl">▶️</span>
            <div>
              <p className="text-white font-bold text-sm">Watch on YouTube</p>
              <p className="text-red-200 text-xs">{lesson.videoTitle}</p>
            </div>
          </div>
        </a>

        {/* Highlight Assignment */}
        <div className="bg-court-mid border border-yellow-900/50 rounded-2xl p-5">
          <p className="text-gold text-xs uppercase tracking-wider mb-2">🎬 Film Assignment</p>
          <p className="text-white/80 text-sm leading-relaxed">{lesson.highlightAssignment}</p>
        </div>

        {/* Drills */}
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">🏋️ Practice Drills</p>
          <div className="space-y-3">
            {lesson.drills.map(drill => {
              const drillDone = completedDrills.has(drill.id)
              return (
                <div key={drill.id} className={`bg-court-mid border rounded-xl p-4 ${drillDone ? 'border-green-700' : 'border-gray-800'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold text-white text-sm">{drill.name}</p>
                      <p className="text-xs text-gray-400">⏱ {drill.duration}</p>
                    </div>
                    {drillDone && <span className="text-green-400 text-sm">✓ +10 XP</span>}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{drill.instructions}</p>
                  {!drillDone && (
                    <button onClick={() => completeDrill(drill.id, drill.type)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg py-2 text-white text-sm font-bold active:scale-95 transition-all">
                      Mark Complete +10 XP
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <button onClick={() => setView('quiz')}
          className="w-full bg-gradient-to-r from-gold to-yellow-600 rounded-2xl py-4 text-black font-black text-lg active:scale-95 transition-transform">
          Take the Quiz {done ? '(Again)' : '→ +XP'}
        </button>
      </div>
    </div>
  )
}
