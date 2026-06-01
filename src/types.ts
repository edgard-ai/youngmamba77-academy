export type View =
  | 'dashboard'
  | 'training'
  | 'school'
  | 'lesson'
  | 'plans'
  | 'pregame'
  | 'parent'
  | 'badges'

export interface Badge {
  id: string
  name: string
  emoji: string
  description: string
  xpReward: number
  unlockCondition: string
}

export interface Drill {
  id: string
  name: string
  duration: string
  instructions: string
  type: 'ball-handling' | 'shooting' | 'footwork' | 'strength' | 'stretch'
}

export interface QuizOption {
  text: string
  correct: boolean
}

export interface Chapter {
  title: string
  content: string
  videoUrl?: string
  videoTitle?: string
}

export interface Lesson {
  id: string
  title: string
  emoji: string
  category: string
  track: 1 | 2 | 3 | 4 | 5
  tagline: string
  chapters: Chapter[]
  quiz: {
    question: string
    options: QuizOption[]
  }
  xpReward: number
}

export interface CurriculumTrack {
  id: 1 | 2 | 3 | 4 | 5
  name: string
  emoji: string
  subtitle: string
  color: string
  unlockRequirement: number
  description: string
}

export interface DailyTrainingDay {
  day: number
  theory: string
  ballHandling: Drill
  shooting: Drill
  footwork: Drill
  conditioning: Drill
  stretch: Drill
  journalQuestion: string
}

export interface GameProgress {
  xp: number
  streak: number
  lastTrainingDate: string
  completedDays: string[]
  unlockedBadges: string[]
  completedLessons: string[]
  completedChapters: string[]
  drillCounts: Record<string, number>
  journalEntries: { date: string; text: string }[]
  pregameCompletions: number
  parentNotes: string
}
