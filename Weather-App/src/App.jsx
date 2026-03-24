import ThemeToggle from './components/ThemeToggle'
import HomePage from './pages/HomePage'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-base-100 transition-colors duration-300">

      {/* Navbar */}
      <header className="navbar bg-base-200 shadow-sm px-6">
        <div className="flex-1">
          <span className="text-xl font-bold">🌤️ WeatherApp</span>
        </div>
        <div className="flex-none">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      {/* Page Title */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">Weather Dashboard</h1>
        <p className="text-base-content/50 mt-2">
          Real-time weather for any city in the world
        </p>
      </div>

      {/* Page Content */}
      <HomePage />

      {/* Footer */}
      <footer className="footer footer-center p-6 bg-base-200 text-base-content/40 mt-10">
        <p>Built with React + TanStack Query + OpenWeather API</p>
      </footer>

    </div>
  )
}

export default App
