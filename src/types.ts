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

export interface Lesson {
  id: string
  title: string
  emoji: string
  category: string
  explanation: string
  coachingPoints: string[]
  commonMistakes: string[]
  videoUrl: string
  videoTitle: string
  highlightAssignment: string
  drills: Drill[]
  quiz: {
    question: string
    options: QuizOption[]
  }
  xpReward: number
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
  drillCounts: Record<string, number>
  journalEntries: { date: string; text: string }[]
  pregameCompletions: number
  parentNotes: string
}
