import React, { useState } from 'react'
import type { FilmModuleData, FilmReflection, GameProgress } from '../types'
import { FILM_MODULES } from '../data/filmRoom'

interface Props {
  progress: GameProgress
  onMarkWatched: (moduleId: string) => void
  onSaveNotes: (moduleId: string, notes: string) => void
  onSaveReflection: (moduleId: string, reflection: FilmReflection) => void
  onSaveQuizAnswer: (moduleId: string, answerIndex: number) => void
  onCompleteModule: (moduleId: string, xpReward: number) => void
  onAddXP: (xp: number) => void
}

type ModuleView = 'grid' | 'module'

const REFLECTION_QUESTIONS = [
  'What did I learn from this video?',
  'What impressed me the most?',
  'What can I use in my next practice?',
  'What would Kobe do with this lesson?',
]

export default function FilmRoom({
  progress,
  onMarkWatched,
  onSaveNotes,
  onSaveReflection,
  onSaveQuizAnswer,
  onCompleteModule,
  onAddXP,
}: Props) {
  const [view, setView] = useState<ModuleView>('grid')
  const [selectedModule, setSelectedModule] = useState<FilmModuleData | null>(null)
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null)
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [notes, setNotes] = useState('')
  const [notesSaved, setNotesSaved] = useState(false)
  const [reflection, setReflection] = useState<FilmReflection>({ q1: '', q2: '', q3: '', q4: '' })
  const [reflectionSaved, setReflectionSaved] = useState(false)
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set())

  const completedCount = progress.completedFilmModules.length

  function openModule(mod: FilmModuleData) {
    setSelectedModule(mod)
    setView('module')
    const saved = progress.filmQuizAnswers[mod.id]
    setQuizAnswer(saved !== undefined ? saved : null)
    setQuizSubmitted(saved !== undefined)
    setNotes(progress.filmNotes[mod.id] || '')
    setNotesSaved(false)
    const savedRef = progress.filmReflections[mod.id]
    setReflection(savedRef || { q1: '', q2: '', q3: '', q4: '' })
    setReflectionSaved(false)
  }

  function handleWatch(mod: FilmModuleData) {
    window.open(mod.youtubeSearchUrl, '_blank', 'noopener,noreferrer')
  }

  function handleMarkWatched(mod: FilmModuleData) {
    onMarkWatched(mod.id)
  }

  function submitQuiz(mod: FilmModuleData) {
    if (quizAnswer === null) return
    setQuizSubmitted(true)
    onSaveQuizAnswer(mod.id, quizAnswer)
    const correct = mod.quiz.options[quizAnswer]?.correct
    if (correct) onAddXP(25)
  }

  function saveNotes(mod: FilmModuleData) {
    onSaveNotes(mod.id, notes)
    setNotesSaved(true)
    setTimeout(() => setNotesSaved(false), 2000)
  }

  function saveReflection(mod: FilmModuleData) {
    onSaveReflection(mod.id, reflection)
    setReflectionSaved(true)
    setTimeout(() => setReflectionSaved(false), 2000)
  }

  function completeModule(mod: FilmModuleData) {
    onCompleteModule(mod.id, mod.xpReward)
  }

  function getRecommendations(mod: FilmModuleData): FilmModuleData[] {
    return mod.recommendedIds
      .map(id => FILM_MODULES.find(m => m.id === id))
      .filter((m): m is FilmModuleData => !!m && !progress.completedFilmModules.includes(m.id))
      .slice(0, 2)
  }

  // ─── GRID VIEW ─────────────────────────────────────────────────────────────
  if (view === 'grid' || !selectedModule) {
    const recentlyCompleted = FILM_MODULES.filter(m => progress.completedFilmModules.includes(m.id)).slice(-1)[0]
    const recommendations = recentlyCompleted ? getRecommendations(recentlyCompleted) : []

    return (
      <div className="min-h-screen court-texture pb-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-gray-950 via-purple-950/40 to-red-950/30 px-4 pt-8 pb-5 border-b border-purple-900/40">
          <p className="text-purple-400 text-xs uppercase tracking-widest font-bold mb-1">🎥 The Classroom of Champions</p>
          <h2 className="text-2xl font-black text-white">Film Room</h2>
          <p className="text-gray-400 text-sm mt-1">
            Study like Kobe. Think like Jordan. Play like a champion.
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex-1 bg-gray-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-gold rounded-full h-2 transition-all"
                style={{ width: `${(completedCount / FILM_MODULES.length) * 100}%` }}
              />
            </div>
            <span className="text-gold font-bold text-sm">{completedCount}/{FILM_MODULES.length}</span>
          </div>
        </div>

        <div className="px-4 py-4 space-y-5">
          {/* Netflix-style recommendation */}
          {recommendations.length > 0 && (
            <div>
              <p className="text-gold text-xs uppercase tracking-wider font-bold mb-2">🎬 Next Lesson For Young Mamba</p>
              <div className="space-y-2">
                {recommendations.map(mod => (
                  <button
                    key={mod.id}
                    onClick={() => openModule(mod)}
                    className="w-full bg-gradient-to-r from-purple-900/60 to-gray-900 border border-purple-700/50 rounded-xl p-3 text-left flex items-center gap-3 active:opacity-80"
                  >
                    <span className="text-2xl">{mod.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm">{mod.title}</p>
                      {mod.playerName && <p className="text-purple-300 text-xs">{mod.playerName}</p>}
                    </div>
                    <span className="text-gold text-xs font-bold">+{mod.xpReward} XP</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* All Modules */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-3">All Modules</p>
            <div className="space-y-3">
              {FILM_MODULES.map((mod, idx) => {
                const completed = progress.completedFilmModules.includes(mod.id)
                const watched = progress.watchedFilmModules.includes(mod.id)
                const hasImgError = imgErrors.has(mod.id)

                return (
                  <button
                    key={mod.id}
                    onClick={() => openModule(mod)}
                    className={`w-full rounded-2xl overflow-hidden text-left active:opacity-80 transition-all border ${
                      completed
                        ? 'border-gold/40 bg-yellow-900/10'
                        : 'border-gray-800 bg-court-mid'
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-red-900/50">
                      {!hasImgError ? (
                        <img
                          src={`https://img.youtube.com/vi/${mod.youtubeId}/mqdefault.jpg`}
                          alt={mod.title}
                          className="w-full h-full object-cover opacity-70"
                          onError={() => setImgErrors(prev => new Set([...prev, mod.id]))}
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-2 left-2">
                        <span className="bg-black/60 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                          Module {idx + 1}
                        </span>
                      </div>
                      {completed && (
                        <div className="absolute top-2 right-2">
                          <span className="bg-gold text-black text-xs px-2 py-0.5 rounded-full font-black">✓ Done</span>
                        </div>
                      )}
                      {watched && !completed && (
                        <div className="absolute top-2 right-2">
                          <span className="bg-green-700 text-white text-xs px-2 py-0.5 rounded-full font-bold">Watched</span>
                        </div>
                      )}
                      <div className="absolute bottom-2 left-3 right-3">
                        <p className="text-white font-black text-base leading-tight">{mod.emoji} {mod.title}</p>
                        {mod.playerName && <p className="text-gold text-xs font-bold">{mod.playerName}</p>}
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="px-3 py-2 flex items-center justify-between">
                      <div className="flex gap-1.5 flex-wrap">
                        {mod.lessons.slice(0, 2).map(l => (
                          <span key={l} className="bg-gray-800 text-gray-300 text-xs px-2 py-0.5 rounded-full">{l}</span>
                        ))}
                      </div>
                      <span className={`text-xs font-bold ${completed ? 'text-gold' : 'text-gray-500'}`}>
                        {completed ? `✓ +${mod.xpReward} XP` : `+${mod.xpReward} XP`}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ─── MODULE VIEW ────────────────────────────────────────────────────────────
  const mod = selectedModule
  const isWatched = progress.watchedFilmModules.includes(mod.id)
  const isCompleted = progress.completedFilmModules.includes(mod.id)
  const quizCorrect = quizSubmitted && mod.quiz.options[quizAnswer ?? 0]?.correct
  const reflectionFilled = reflection.q1.trim() || reflection.q2.trim() || reflection.q3.trim() || reflection.q4.trim()
  const canComplete = isWatched && quizSubmitted && !isCompleted

  const hasImgError = imgErrors.has(mod.id)
  const recommendations = getRecommendations(mod)

  return (
    <div className="min-h-screen court-texture pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-950 via-purple-950/40 to-red-950/30 px-4 pt-8 pb-5 border-b border-purple-900/40">
        <button onClick={() => setView('grid')} className="text-gray-400 text-sm mb-3">‹ Film Room</button>
        <div className="flex items-start gap-3">
          <span className="text-4xl">{mod.emoji}</span>
          <div>
            <h2 className="text-xl font-black text-white leading-tight">{mod.title}</h2>
            {mod.playerName && <p className="text-gold text-sm font-bold">{mod.playerName}</p>}
            <div className="flex items-center gap-2 mt-1">
              {isCompleted && <span className="bg-gold text-black text-xs px-2 py-0.5 rounded-full font-black">✓ Complete</span>}
              {isWatched && !isCompleted && <span className="bg-green-700 text-white text-xs px-2 py-0.5 rounded-full font-bold">Watched</span>}
              <span className="text-gray-500 text-xs">+{mod.xpReward} XP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">

        {/* ── 1. VIDEO SECTION ─────────────────────────────────────────────── */}
        <div className="rounded-2xl overflow-hidden border border-gray-800">
          <div className="relative h-44 bg-gradient-to-br from-purple-900 via-gray-900 to-red-900/50">
            {!hasImgError ? (
              <img
                src={`https://img.youtube.com/vi/${mod.youtubeId}/mqdefault.jpg`}
                alt={mod.title}
                className="w-full h-full object-cover opacity-60"
                onError={() => setImgErrors(prev => new Set([...prev, mod.id]))}
              />
            ) : null}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-1">▶️</div>
                <p className="text-white font-black text-sm">{mod.title}</p>
              </div>
            </div>
          </div>
          <div className="bg-court-mid p-3 space-y-2">
            <button
              onClick={() => handleWatch(mod)}
              className="w-full bg-gradient-to-r from-red-700 to-red-900 rounded-xl py-3 text-white font-black text-base active:opacity-80 flex items-center justify-center gap-2"
            >
              <span>▶</span> Watch on YouTube
            </button>
            {!isWatched ? (
              <button
                onClick={() => handleMarkWatched(mod)}
                className="w-full bg-gray-800 border border-gray-600 rounded-xl py-2.5 text-gray-300 font-bold text-sm active:bg-gray-700"
              >
                Mark as Watched ✓
              </button>
            ) : (
              <div className="text-center py-2">
                <span className="text-green-400 font-bold text-sm">✓ Marked as Watched</span>
              </div>
            )}
          </div>
        </div>

        {/* ── 2. LESSON SUMMARY ────────────────────────────────────────────── */}
        <div className="bg-court-mid border border-purple-900/50 rounded-2xl p-5">
          <p className="text-purple-400 text-xs uppercase tracking-wider font-bold mb-3">📖 Lesson Summary</p>
          <p className="text-white/90 text-sm leading-relaxed mb-4">{mod.summary}</p>
          <div>
            <p className="text-gold text-xs uppercase tracking-wider font-bold mb-2">🎯 Key Takeaways</p>
            <ul className="space-y-1.5">
              {mod.keyTakeaways.map((t, i) => (
                <li key={i} className="flex gap-2 text-sm text-white/80">
                  <span className="text-gold flex-shrink-0 font-bold">{i + 1}.</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── 3. NOTES ─────────────────────────────────────────────────────── */}
        <div className="bg-court-mid border border-gray-800 rounded-2xl p-4">
          <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-2">📝 My Notes</p>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Write your notes here — things you want to remember, what stood out, questions you have..."
            rows={4}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none resize-none text-sm"
            style={{ userSelect: 'text' }}
          />
          <button
            onClick={() => saveNotes(mod)}
            className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 text-white font-bold text-sm active:bg-gray-700"
          >
            {notesSaved ? '✓ Saved!' : 'Save Notes'}
          </button>
        </div>

        {/* ── 4. QUIZ (unlocks after watching) ─────────────────────────────── */}
        <div className={`rounded-2xl border p-5 transition-all ${isWatched ? 'bg-court-mid border-gold/30' : 'bg-gray-900/50 border-gray-800 opacity-60'}`}>
          <p className="text-gold text-xs uppercase tracking-wider font-bold mb-3">
            ❓ Knowledge Check {!isWatched && '— Watch the video first'}
          </p>
          <p className="text-white font-bold text-base mb-4">{mod.quiz.question}</p>
          <div className="space-y-2 mb-4">
            {mod.quiz.options.map((opt, i) => {
              let style = 'bg-gray-900 border border-gray-700 text-white'
              if (quizSubmitted) {
                if (opt.correct) style = 'bg-green-900 border border-green-500 text-green-300'
                else if (quizAnswer === i) style = 'bg-red-900 border border-red-600 text-red-300'
                else style = 'bg-gray-900 border border-gray-800 text-gray-500'
              } else if (quizAnswer === i) {
                style = 'bg-purple-900 border border-purple-500 text-white'
              }
              return (
                <button
                  key={i}
                  onClick={() => isWatched && !quizSubmitted && setQuizAnswer(i)}
                  disabled={!isWatched}
                  className={`w-full rounded-xl p-3 text-left text-sm font-medium ${style} active:opacity-80 transition-all`}
                >
                  <span className="mr-2 font-black">{['A', 'B', 'C', 'D'][i]}.</span>
                  {opt.text}
                  {quizSubmitted && opt.correct && ' ✓'}
                </button>
              )
            })}
          </div>
          {quizSubmitted ? (
            <div className={`rounded-xl p-4 ${quizCorrect ? 'bg-green-900/40 border border-green-700' : 'bg-orange-900/30 border border-orange-700'}`}>
              <p className="font-bold text-white mb-1">
                {quizCorrect ? '🎉 Correct! +25 XP' : '📖 Not quite — re-read the summary'}
              </p>
              <p className="text-white/70 text-sm">{mod.quiz.explanation}</p>
            </div>
          ) : (
            <button
              onClick={() => submitQuiz(mod)}
              disabled={!isWatched || quizAnswer === null}
              className="w-full bg-gradient-to-r from-gold to-yellow-600 rounded-xl py-3 text-black font-black text-base active:scale-95 transition-transform disabled:opacity-40"
            >
              Submit Answer
            </button>
          )}
        </div>

        {/* ── 5. REFLECTION JOURNAL (unlocks after watching) ────────────────── */}
        <div className={`rounded-2xl border p-5 transition-all ${isWatched ? 'bg-court-mid border-purple-900/50' : 'bg-gray-900/50 border-gray-800 opacity-60'}`}>
          <p className="text-purple-400 text-xs uppercase tracking-wider font-bold mb-3">
            📔 Reflection Journal {!isWatched && '— Watch the video first'}
          </p>
          <div className="space-y-4">
            {REFLECTION_QUESTIONS.map((q, i) => {
              const key = `q${i + 1}` as keyof FilmReflection
              return (
                <div key={i}>
                  <p className="text-white/80 text-sm font-bold mb-1">{i + 1}. {q}</p>
                  <textarea
                    value={reflection[key]}
                    onChange={e => setReflection(prev => ({ ...prev, [key]: e.target.value }))}
                    disabled={!isWatched}
                    placeholder="Write your answer here..."
                    rows={2}
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none resize-none text-sm disabled:opacity-50"
                    style={{ userSelect: 'text' }}
                  />
                </div>
              )
            })}
          </div>
          {isWatched && (
            <button
              onClick={() => saveReflection(mod)}
              disabled={!reflectionFilled}
              className="mt-3 w-full bg-purple-800 border border-purple-600 rounded-xl py-2.5 text-white font-bold text-sm active:opacity-80 disabled:opacity-40"
            >
              {reflectionSaved ? '✓ Journal Saved!' : 'Save Reflection'}
            </button>
          )}
        </div>

        {/* ── 6. COMPLETE MODULE button ─────────────────────────────────────── */}
        {isCompleted ? (
          <div className="bg-yellow-900/20 border border-gold/30 rounded-2xl p-4 text-center">
            <p className="text-gold font-black text-lg">✓ Module Complete!</p>
            <p className="text-gray-400 text-sm mt-1">+{mod.xpReward} XP earned</p>
          </div>
        ) : (
          <button
            onClick={() => completeModule(mod)}
            disabled={!canComplete}
            className="w-full bg-gradient-to-r from-gold to-yellow-500 rounded-2xl py-5 text-black font-black text-xl active:scale-95 transition-transform disabled:opacity-30 shadow-lg"
          >
            {!isWatched ? '📺 Watch Video First' : !quizSubmitted ? '❓ Take the Quiz First' : `🏆 Complete Module +${mod.xpReward} XP`}
          </button>
        )}

        {/* ── 7. RECOMMENDATIONS ────────────────────────────────────────────── */}
        {(isCompleted || isWatched) && recommendations.length > 0 && (
          <div>
            <p className="text-gold text-xs uppercase tracking-wider font-bold mb-2">🎬 Next Lesson For Young Mamba</p>
            <div className="space-y-2">
              {recommendations.map(rec => (
                <button
                  key={rec.id}
                  onClick={() => openModule(rec)}
                  className="w-full bg-gradient-to-r from-purple-900/50 to-gray-900 border border-purple-700/40 rounded-xl p-3 text-left flex items-center gap-3 active:opacity-80"
                >
                  <span className="text-2xl">{rec.emoji}</span>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm">{rec.title}</p>
                    {rec.playerName && <p className="text-purple-300 text-xs">{rec.playerName}</p>}
                  </div>
                  <span className="text-gold text-xs font-bold">+{rec.xpReward} XP ›</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
