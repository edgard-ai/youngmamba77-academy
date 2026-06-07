import { useState, useCallback } from 'react'
import type { GameProgress, FilmReflection } from '../types'
import { BADGES, getLevel } from '../data/badges'

const STORAGE_KEY = 'youngmamba77_progress'

const DEFAULT_PROGRESS: GameProgress = {
  xp: 0,
  streak: 0,
  lastTrainingDate: '',
  completedDays: [],
  unlockedBadges: [],
  completedLessons: [],
  completedChapters: [],
  drillCounts: {},
  journalEntries: [],
  pregameCompletions: 0,
  parentNotes: '',
  completedFilmModules: [],
  filmNotes: {},
  filmReflections: {},
  filmQuizAnswers: {},
  watchedFilmModules: [],
}

function loadProgress(): GameProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_PROGRESS
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) }
  } catch {
    return DEFAULT_PROGRESS
  }
}

function saveProgress(p: GameProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
  } catch {}
}

function checkBadges(progress: GameProgress): { updated: GameProgress; newBadges: string[] } {
  const newBadges: string[] = []
  let updated = { ...progress }

  const check = (id: string, condition: boolean) => {
    if (condition && !updated.unlockedBadges.includes(id)) {
      updated.unlockedBadges = [...updated.unlockedBadges, id]
      const badge = BADGES.find(b => b.id === id)
      if (badge) updated.xp += badge.xpReward
      newBadges.push(id)
    }
  }

  check('first-practice', updated.completedDays.length >= 1)
  check('seven-day-streak', updated.streak >= 7)
  check('handles-hero', (updated.drillCounts['ball-handling'] || 0) >= 5)
  check('splash-shooter', (updated.drillCounts['shooting'] || 0) >= 5)
  check('lockdown-defender', (updated.drillCounts['footwork'] || 0) >= 5)
  check('young-mamba-mindset', updated.journalEntries.length >= 7)
  check('capi-capi-captain', updated.pregameCompletions >= 5)
  check('school-scholar', updated.completedLessons.length >= 5)
  check('legend-77', updated.xp >= 1500)
  // Film Room badges — one per module
  check('mamba-mindset', updated.completedFilmModules.includes('mamba-mentality'))
  check('basketball-historian', updated.completedFilmModules.includes('basketball-history'))
  check('fundamentals-master', updated.completedFilmModules.includes('jordan-fundamentals'))
  check('film-splash-shooter', updated.completedFilmModules.includes('curry-shooting'))
  check('handle-hero', updated.completedFilmModules.includes('iverson-creativity'))
  check('court-general', updated.completedFilmModules.includes('basketball-iq'))
  check('basketball-strategist', updated.completedFilmModules.includes('xos-basketball'))
  check('great-teammate', updated.completedFilmModules.includes('bulls-teamwork'))
  check('film-analyst', updated.completedFilmModules.includes('film-study'))
  check('young-captain', updated.completedFilmModules.includes('leadership'))

  return { updated, newBadges }
}

export function useGameProgress() {
  const [progress, setProgress] = useState<GameProgress>(loadProgress)
  const [newBadgeIds, setNewBadgeIds] = useState<string[]>([])

  const update = useCallback((updater: (prev: GameProgress) => GameProgress) => {
    setProgress(prev => {
      const next = updater(prev)
      const { updated, newBadges } = checkBadges(next)
      if (newBadges.length > 0) setNewBadgeIds(b => [...b, ...newBadges])
      saveProgress(updated)
      return updated
    })
  }, [])

  const addXP = useCallback((amount: number) => {
    update(p => ({ ...p, xp: p.xp + amount }))
  }, [update])

  const completeTrainingDay = useCallback((date: string) => {
    update(p => {
      const today = date.split('T')[0]
      if (p.completedDays.includes(today)) return p

      const yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayStr = yesterday.toISOString().split('T')[0]

      const twoDaysAgo = new Date(today)
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)
      const twoDaysAgoStr = twoDaysAgo.toISOString().split('T')[0]
      const thisMonth = today.slice(0, 7)
      const graceDayUsedThisMonth = p.lastTrainingDate.slice(0, 7) === thisMonth &&
        p.lastTrainingDate !== yesterdayStr && p.lastTrainingDate === twoDaysAgoStr

      const newStreak = p.lastTrainingDate === yesterdayStr
        ? p.streak + 1
        : graceDayUsedThisMonth
        ? p.streak + 1
        : 1

      return {
        ...p,
        completedDays: [...p.completedDays, today],
        lastTrainingDate: today,
        streak: newStreak,
        xp: p.xp + 50,
      }
    })
  }, [update])

  const recordDrillType = useCallback((type: string) => {
    update(p => ({
      ...p,
      drillCounts: { ...p.drillCounts, [type]: (p.drillCounts[type] || 0) + 1 },
    }))
  }, [update])

  const completeLesson = useCallback((lessonId: string, xpReward: number) => {
    update(p => {
      if (p.completedLessons.includes(lessonId)) return p
      return { ...p, completedLessons: [...p.completedLessons, lessonId], xp: p.xp + xpReward }
    })
  }, [update])

  const completeChapter = useCallback((chapterKey: string) => {
    update(p => {
      if (p.completedChapters.includes(chapterKey)) return p
      return { ...p, completedChapters: [...p.completedChapters, chapterKey], xp: p.xp + 10 }
    })
  }, [update])

  const addJournalEntry = useCallback((text: string, date: string) => {
    update(p => ({
      ...p,
      journalEntries: [...p.journalEntries, { date, text }],
      xp: p.xp + 15,
    }))
  }, [update])

  const completePregame = useCallback(() => {
    update(p => ({ ...p, pregameCompletions: p.pregameCompletions + 1, xp: p.xp + 20 }))
  }, [update])

  const updateParentNotes = useCallback((notes: string) => {
    update(p => ({ ...p, parentNotes: notes }))
  }, [update])

  const markFilmWatched = useCallback((moduleId: string) => {
    update(p => {
      if (p.watchedFilmModules.includes(moduleId)) return p
      return { ...p, watchedFilmModules: [...p.watchedFilmModules, moduleId] }
    })
  }, [update])

  const saveFilmNotes = useCallback((moduleId: string, notes: string) => {
    update(p => ({ ...p, filmNotes: { ...p.filmNotes, [moduleId]: notes } }))
  }, [update])

  const saveFilmReflection = useCallback((moduleId: string, reflection: FilmReflection) => {
    update(p => ({ ...p, filmReflections: { ...p.filmReflections, [moduleId]: reflection } }))
  }, [update])

  const saveFilmQuizAnswer = useCallback((moduleId: string, answerIndex: number) => {
    update(p => ({ ...p, filmQuizAnswers: { ...p.filmQuizAnswers, [moduleId]: answerIndex } }))
  }, [update])

  const completeFilmModule = useCallback((moduleId: string, xpReward: number) => {
    update(p => {
      if (p.completedFilmModules.includes(moduleId)) return p
      return { ...p, completedFilmModules: [...p.completedFilmModules, moduleId], xp: p.xp + xpReward }
    })
  }, [update])

  const clearNewBadges = useCallback(() => setNewBadgeIds([]), [])

  const clearAll = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setProgress(DEFAULT_PROGRESS)
  }, [])

  return {
    progress,
    level: getLevel(progress.xp),
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
  }
}
