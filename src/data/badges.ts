import type { Badge } from '../types'

export const BADGES: Badge[] = [
  {
    id: 'first-practice',
    name: 'First Practice',
    emoji: '🏀',
    description: 'Complete your very first training session!',
    xpReward: 25,
    unlockCondition: 'Complete 1 training day',
  },
  {
    id: 'seven-day-streak',
    name: '7-Day Streak',
    emoji: '🔥',
    description: "7 days in a row — you're on fire!",
    xpReward: 100,
    unlockCondition: 'Train 7 days in a row',
  },
  {
    id: 'handles-hero',
    name: 'Handles Hero',
    emoji: '🎯',
    description: 'Your handles are getting elite!',
    xpReward: 50,
    unlockCondition: 'Complete 5 ball-handling drills',
  },
  {
    id: 'splash-shooter',
    name: 'Splash Shooter',
    emoji: '💦',
    description: 'Splash! You got that Steph energy.',
    xpReward: 50,
    unlockCondition: 'Complete 5 shooting drills',
  },
  {
    id: 'lockdown-defender',
    name: 'Lockdown Defender',
    emoji: '🛡️',
    description: 'Nobody scoring on you today!',
    xpReward: 50,
    unlockCondition: 'Complete 5 defense/footwork drills',
  },
  {
    id: 'young-mamba-mindset',
    name: 'Young Mamba Mindset',
    emoji: '🐍',
    description: 'Mamba Mentality — mental game unlocked.',
    xpReward: 75,
    unlockCondition: 'Complete 7 journal entries',
  },
  {
    id: 'capi-capi-captain',
    name: 'Capi Capi Captain',
    emoji: '👑',
    description: 'You lead by example. Captain energy!',
    xpReward: 100,
    unlockCondition: 'Complete pregame routine 5 times',
  },
  {
    id: 'school-scholar',
    name: 'Basketball Scholar',
    emoji: '📚',
    description: 'You studied the game like a pro!',
    xpReward: 75,
    unlockCondition: 'Complete 5 Basketball School lessons',
  },
  {
    id: 'legend-77',
    name: 'Legend #77',
    emoji: '⭐',
    description: '#77 is in the history books!',
    xpReward: 200,
    unlockCondition: 'Reach Legend #77 level (1500 XP)',
  },
  // Film Room badges
  {
    id: 'mamba-mindset',
    name: 'Mamba Mindset',
    emoji: '🐍',
    description: 'You studied Kobe\'s obsession and made it your own.',
    xpReward: 50,
    unlockCondition: 'Complete the Mamba Mentality film module',
  },
  {
    id: 'basketball-historian',
    name: 'Basketball Historian',
    emoji: '📜',
    description: 'You know where the game came from.',
    xpReward: 50,
    unlockCondition: 'Complete the Basketball History film module',
  },
  {
    id: 'fundamentals-master',
    name: 'Fundamentals Master',
    emoji: '🐐',
    description: 'Jordan built his greatness on fundamentals. So will you.',
    xpReward: 50,
    unlockCondition: 'Complete the Jordan Fundamentals film module',
  },
  {
    id: 'film-splash-shooter',
    name: 'Splash Shooter',
    emoji: '🎯',
    description: 'Curry\'s BEEF is your BEEF now.',
    xpReward: 50,
    unlockCondition: 'Complete the Steph Curry Shooting Lab film module',
  },
  {
    id: 'handle-hero',
    name: 'Handle Hero',
    emoji: '⚡',
    description: 'Iverson\'s confidence is in your crossover.',
    xpReward: 50,
    unlockCondition: 'Complete the Allen Iverson Creativity School film module',
  },
  {
    id: 'court-general',
    name: 'Court General',
    emoji: '🧠',
    description: 'Your basketball IQ just leveled up.',
    xpReward: 50,
    unlockCondition: 'Complete the Basketball IQ 101 film module',
  },
  {
    id: 'basketball-strategist',
    name: 'Basketball Strategist',
    emoji: '♟️',
    description: 'You think like a coach now.',
    xpReward: 50,
    unlockCondition: 'Complete the X\'s and O\'s film module',
  },
  {
    id: 'great-teammate',
    name: 'Great Teammate',
    emoji: '🤝',
    description: 'The 1996 Bulls showed you what team means.',
    xpReward: 50,
    unlockCondition: 'Complete the 1996 Bulls film module',
  },
  {
    id: 'film-analyst',
    name: 'Film Analyst',
    emoji: '🎥',
    description: 'You study the game like a pro now.',
    xpReward: 50,
    unlockCondition: 'Complete the Film Study School module',
  },
  {
    id: 'young-captain',
    name: 'Young Captain',
    emoji: '👑',
    description: 'Leaders are made in practice. You are becoming one.',
    xpReward: 50,
    unlockCondition: 'Complete the Leadership and Greatness film module',
  },
]

export const LEVELS = [
  { name: 'Rookie', minXP: 0, maxXP: 99, color: 'text-gray-400', bg: 'from-gray-600 to-gray-800' },
  { name: 'Starter', minXP: 100, maxXP: 249, color: 'text-green-400', bg: 'from-green-600 to-green-800' },
  { name: 'Playmaker', minXP: 250, maxXP: 499, color: 'text-blue-400', bg: 'from-blue-600 to-blue-800' },
  { name: 'All-Star', minXP: 500, maxXP: 899, color: 'text-purple-400', bg: 'from-purple-600 to-purple-800' },
  { name: 'Young Mamba', minXP: 900, maxXP: 1499, color: 'text-yellow-400', bg: 'from-yellow-600 to-yellow-800' },
  { name: 'Legend #77', minXP: 1500, maxXP: 99999, color: 'text-gold', bg: 'from-yellow-400 to-yellow-600' },
]

export function getLevel(xp: number) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) return { ...LEVELS[i], index: i }
  }
  return { ...LEVELS[0], index: 0 }
}

export function getLevelProgress(xp: number) {
  const level = getLevel(xp)
  const range = level.maxXP - level.minXP
  const earned = xp - level.minXP
  return Math.min(100, Math.round((earned / range) * 100))
}
