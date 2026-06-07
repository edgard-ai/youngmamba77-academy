import React from 'react'
import type { View } from '../types'

interface NavItem {
  view: View
  label: string
  emoji: string
}

const NAV_ITEMS: NavItem[] = [
  { view: 'dashboard', label: 'Home', emoji: '🏠' },
  { view: 'training', label: 'Train', emoji: '🏀' },
  { view: 'school', label: 'School', emoji: '📚' },
  { view: 'filmroom', label: 'Film', emoji: '🎥' },
  { view: 'parent', label: 'Coach', emoji: '👁️' },
]

interface Props {
  current: View
  onNav: (v: View) => void
}

export default function Navigation({ current, onNav }: Props) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-court-light border-t border-gray-800 safe-bottom z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {NAV_ITEMS.map(item => (
          <button
            key={item.view}
            onClick={() => onNav(item.view)}
            className={`flex flex-col items-center justify-center flex-1 h-full gap-0.5 transition-all ${
              current === item.view
                ? 'text-gold'
                : 'text-gray-500 active:text-gray-300'
            }`}
          >
            <span className="text-xl">{item.emoji}</span>
            <span className="text-xs font-medium">{item.label}</span>
            {current === item.view && (
              <span className="absolute bottom-0 w-8 h-0.5 bg-gold rounded-t-full" />
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}
