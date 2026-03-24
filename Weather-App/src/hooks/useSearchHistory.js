import { useState } from 'react'

const MAX_HISTORY = 5

export function useSearchHistory() {
  const [history, setHistory] = useState(() => {
    // lazy initializer — only runs once on mount
    const saved = localStorage.getItem('weather-history')
    return saved ? JSON.parse(saved) : []
  })

  function addToHistory(city) {
    setHistory(prev => {
      // Remove duplicate if city already exists
      const filtered = prev.filter(
        c => c.toLowerCase() !== city.toLowerCase()
      )
      // Add to front, keep max 5
      const updated = [city, ...filtered].slice(0, MAX_HISTORY)
      localStorage.setItem('weather-history', JSON.stringify(updated))
      return updated
    })
  }

  function clearHistory() {
    setHistory([])
    localStorage.removeItem('weather-history')
  }

  return { history, addToHistory, clearHistory }
}