import React, { useState } from 'react';

const Searchbar = ({ onSearch, isLoading }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        const trimmed = city.trim();
        if (!trimmed) return;
        onSearch(trimmed);
        setCity('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="w-full max-w-md pt-10 pb-10 mx-auto"> {/* centered + better width control */}
            <div className="relative group">
                {/* Glassmorphism Container */}
                <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/50 dark:border-gray-700/50 rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden transition-all duration-300 focus-within:shadow-3xl focus-within:scale-[1.02]">
                    
                    <input
                        id="Search"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isLoading}
                        placeholder="Search for a city..."
                        className="w-full bg-transparent py-5 pl-7 pr-16 text-lg placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none text-gray-900 dark:text-white disabled:opacity-70"
                    />

                    {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        disabled={isLoading || !city.trim()}
                        aria-label="Search city"
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-2xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <span className="loading loading-spinner loading-md"></span>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196 7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Subtle bottom glow / highlight */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-md rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity" />
            </div>
        </div>
    );
};

export default Searchbar;