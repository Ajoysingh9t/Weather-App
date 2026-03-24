function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      onClick={onToggle}
      className="btn btn-ghost btn-circle"
      title="Toggle theme"
    >
      {isDark ? (
        <span className="text-2xl">☀️</span>
      ) : (
        <span className="text-2xl">🌙</span>
      )}
    </button>
  )
}

export default ThemeToggle