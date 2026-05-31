import { useState, useCallback } from 'react'
import type { GameProgress } from '../types'
import { BADGES, getLevel } from '../data/badges'

const STORAGE_KEY = 'youngmamba77_progress'

const DEFAULT_PROGRESS: GameProgress = {
  xp: 0,
  streak: 0,
  lastTrainingDate: '',
  completedDays: [],
  unlockedBadges: [],
  completedLessons: [],
  drillCounts: {},
  journalEntries: [],
  pregameCompletions: 0,
  parentNotes: '',
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
  } catch {
    // storage full — ignore
  }
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

      const newStreak = p.lastTrainingDate === yesterdayStr ? p.streak + 1 : 1

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
      return {
        ...p,
        completedLessons: [...p.completedLessons, lessonId],
        xp: p.xp + xpReward,
      }
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
    update(p => ({
      ...p,
      pregameCompletions: p.pregameCompletions + 1,
      xp: p.xp + 20,
    }))
  }, [update])

  const updateParentNotes = useCallback((notes: string) => {
    update(p => ({ ...p, parentNotes: notes }))
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
    addJournalEntry,
    completePregame,
    updateParentNotes,
    newBadgeIds,
    clearNewBadges,
    clearAll,
  }
}
