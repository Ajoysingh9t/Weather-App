import React, { useState } from 'react'

const Searchbar = ({ onSearch, isLoading }) => {

    const [city, setCity] = useState('');
    function handleSearch() {
        if (!city.trim()) return;
        onSearch(city.trim());
        setCity("");
    }
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }
    return (
        <div className='w-1/4 pt-10 pb-10'>
            <label for="Search">
                {/* <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Search </span> */}

                <div className="relative">
                    <input  onChange={(e) => setCity(e.target.value)} value={city} disabled={isLoading}  onKeyDown={handleKeyDown}  placeholder='Search City...' type="text" className="p-2 mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white" />

                    <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                        <button onClick={handleSearch} type="button" aria-label="Submit" className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                            {isLoading?(<span className="loading loading-ring loading-xl"></span>):(
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                            </svg>
                            )}
                        </button>
                    </span>
                </div>
            </label>
        </div>
    )
}

export default Searchbar