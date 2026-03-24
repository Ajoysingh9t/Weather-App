import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(
    // persist theme in localStorage
    localStorage.getItem('weather-theme') || 'dark'
  )

  useEffect(() => {
    // Apply theme to the root element
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('weather-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark'
      console.log('Toggling theme from', prev, 'to', newTheme)
      return newTheme
    })
  }

  return { theme, toggleTheme }
}