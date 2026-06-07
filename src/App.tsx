import React, { useState, useEffect } from 'react'
import type { View } from './types'
import { useGameProgress } from './hooks/useGameProgress'
import { BADGES } from './data/badges'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import TodaysTraining from './components/TodaysTraining'
import BasketballSchool from './components/BasketballSchool'
import BadgeCollection from './components/BadgeCollection'
import TrainingPlans from './components/TrainingPlans'
import PregameRoutine from './components/PregameRoutine'
import ParentDashboard from './components/ParentDashboard'
import FilmRoom from './components/FilmRoom'

export default function App() {
  const [view, setView] = useState<View>('dashboard')
  const [badgeToast, setBadgeToast] = useState<string | null>(null)

  const {
    progress,
    addXP,
    completeTrainingDay,
    recordDrillType,
    completeLesson,
    completeChapter,
    addJournalEntry,
    completePregame,
    updateParentNotes,
    markFilmWatched,
    saveFilmNotes,
    saveFilmReflection,
    saveFilmQuizAnswer,
    completeFilmModule,
    newBadgeIds,
    clearNewBadges,
    clearAll,
  } = useGameProgress()

  // Show badge toast notifications
  useEffect(() => {
    if (newBadgeIds.length === 0) return
    const id = newBadgeIds[0]
    const badge = BADGES.find(b => b.id === id)
    if (badge) setBadgeToast(`${badge.emoji} Badge Unlocked: ${badge.name}!`)
    const t = setTimeout(() => {
      setBadgeToast(null)
      clearNewBadges()
    }, 3000)
    return () => clearTimeout(t)
  }, [newBadgeIds, clearNewBadges])

  function renderView() {
    switch (view) {
      case 'dashboard':
        return <Dashboard progress={progress} onNav={setView} />
      case 'training':
        return (
          <TodaysTraining
            progress={progress}
            onCompleteDay={completeTrainingDay}
            onRecordDrill={recordDrillType}
            onJournal={addJournalEntry}
            onAddXP={addXP}
            onNav={(v) => setView(v as View)}
          />
        )
      case 'school':
        return (
          <BasketballSchool
            progress={progress}
            onCompleteLesson={completeLesson}
            onCompleteChapter={completeChapter}
            onAddXP={addXP}
          />
        )
      case 'badges':
        return <BadgeCollection progress={progress} />
      case 'plans':
        return <TrainingPlans />
      case 'pregame':
        return (
          <PregameRoutine
            onComplete={completePregame}
            completions={progress.pregameCompletions}
          />
        )
      case 'filmroom':
        return (
          <FilmRoom
            progress={progress}
            onMarkWatched={markFilmWatched}
            onSaveNotes={saveFilmNotes}
            onSaveReflection={saveFilmReflection}
            onSaveQuizAnswer={saveFilmQuizAnswer}
            onCompleteModule={completeFilmModule}
            onAddXP={addXP}
          />
        )
      case 'parent':
        return (
          <ParentDashboard
            progress={progress}
            onUpdateNotes={updateParentNotes}
            onReset={clearAll}
          />
        )
      default:
        return <Dashboard progress={progress} onNav={setView} />
    }
  }

  return (
    <div className="max-w-lg mx-auto relative min-h-screen">
      {/* Badge Toast */}
      {badgeToast && (
        <div className="fixed top-4 left-4 right-4 z-50 max-w-lg mx-auto">
          <div className="bg-gradient-to-r from-gold to-yellow-500 rounded-2xl p-4 shadow-gold animate-slide-up">
            <p className="text-black font-black text-center">{badgeToast}</p>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="animate-slide-up">
        {renderView()}
      </div>

      {/* Bottom navigation */}
      <Navigation current={view} onNav={setView} />
    </div>
  )
}
