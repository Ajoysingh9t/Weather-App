function SearchHistory({ history, onSelect, onClear }) {
  if (!history || history.length === 0) return null

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-md">
      <div className="flex items-center justify-between w-full px-1">
        <span className="text-xs text-base-content/50 uppercase tracking-wide">
          Recent searches
        </span>
        <button
          onClick={onClear}
          className="btn btn-ghost btn-xs text-error"
        >
          Clear
        </button>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {history.map((city) => (
          <button
            key={city}
            onClick={() => onSelect(city)}
            className="badge badge-outline badge-lg hover:badge-primary 
                       cursor-pointer transition-colors py-3 px-4"
          >
            🕐 {city}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchHistory