import React from 'react'

const WeatherDetails = ({ feels_like, humidity, wind_speed }) => {
    return (
        <div className='w-1/4 '>
            <span className="flex items-center">
                <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-300 dark:to-gray-600"></span>

                <span className="shrink-0 px-4 text-gray-900 dark:text-white">Weather Details </span>

                <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
            </span>

{/* Humidity */}
            <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">

                <div>
                    <p>💧</p>
                    <span className="text-2xl font-medium text-gray-900 dark:text-white">Humidity</span>

                    <p>
                        <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400"> {humidity}%</strong>
                    </p>
                </div>
            </article>
{/* Feels Like */}
            <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">

                <div>
                    <p>🌡️</p>
                    <span className="text-2xl font-medium text-gray-900 dark:text-white">Feels Like</span>

                    <p>
                        <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400">{feels_like}°C</strong>
                    </p>
                </div>
            </article>
            {/* wind Speed */}
            <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">

                <div>
                    <p>💨</p>
                    <span className="text-2xl font-medium text-gray-900 dark:text-white">Wind Speed</span>

                    <p>
                        <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400"> {wind_speed}m/s </strong>
                    </p>
                </div>
            </article>

        </div>
    )
}

export default WeatherDetails