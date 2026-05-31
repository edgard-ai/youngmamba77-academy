import type { CurriculumTrack } from '../types'

export const TRACKS: CurriculumTrack[] = [
  {
    id: 1,
    name: 'Foundation',
    emoji: '🏗️',
    subtitle: 'Master the fundamentals every pro starts with',
    color: 'from-blue-700 to-blue-900',
    unlockRequirement: 0,
    description: 'The 15 building blocks of basketball. Every elite player — MJ, Kobe, Steph — spent thousands of hours here first.',
  },
  {
    id: 2,
    name: 'Mechanics Mastery',
    emoji: '⚙️',
    subtitle: 'Advanced techniques that create separation',
    color: 'from-orange-700 to-red-900',
    unlockRequirement: 5,
    description: 'Pick and roll reads, post moves, shot creation off the dribble, advanced defensive principles. The moves that separate good from elite.',
  },
  {
    id: 3,
    name: 'Systems & Offenses',
    emoji: '🔺',
    subtitle: 'Learn how coaches build entire offenses',
    color: 'from-purple-700 to-purple-900',
    unlockRequirement: 10,
    description: 'The Triangle offense, Run & Gun, Motion offense, the Spurs system, Princeton. Understanding team systems makes you a 10x smarter player.',
  },
  {
    id: 4,
    name: 'Coaching Philosophies',
    emoji: '🧠',
    subtitle: 'Think like the greatest coaches in history',
    color: 'from-green-700 to-green-900',
    unlockRequirement: 17,
    description: 'Phil Jackson, Gregg Popovich, Pat Riley, Mike D\'Antoni. How the greatest coaches think, lead, and build championship cultures.',
  },
  {
    id: 5,
    name: 'The Game\'s Evolution',
    emoji: '🌍',
    subtitle: 'The big picture — basketball\'s past, present, future',
    color: 'from-yellow-600 to-yellow-800',
    unlockRequirement: 23,
    description: 'NBA eras, the analytics revolution, pace and space, the GOAT debate, and what the game looks like in the future. For serious students only.',
  },
]

export function getTrackUnlockStatus(completedCount: number): Record<number, boolean> {
  return {
    1: true,
    2: completedCount >= 5,
    3: completedCount >= 10,
    4: completedCount >= 17,
    5: completedCount >= 23,
  }
}
