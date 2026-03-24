import React, { memo } from 'react';

// Individual detail card with enhanced interactions
const WeatherDetailCard = memo(({ icon, label, value, unit, trend }) => {
    const displayValue = value ?? '--';
    
    return (
        <article 
            className="group relative flex items-center gap-4 rounded-xl border border-white/20 bg-white/80 backdrop-blur-md p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-white hover:scale-[1.02] dark:border-gray-700/50 dark:bg-gray-800/80 dark:hover:bg-gray-800"
            role="listitem"
        >
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5 dark:group-hover:opacity-10" />
            
            {/* Icon with animation */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 text-2xl transition-transform duration-300 group-hover:scale-110 dark:from-gray-700 dark:to-gray-600">
                <span className="animate-pulse-slow">{icon}</span>
            </div>
            
            {/* Content */}
            <div className="relative flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {label}
                </p>
                <div className="flex items-baseline gap-1">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white tabular-nums">
                        {displayValue}
                    </p>
                    {unit && (
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {unit}
                        </span>
                    )}
                </div>
                
                {/* Optional trend indicator */}
                {trend && (
                    <span className={`text-xs ${trend > 0 ? 'text-red-500' : 'text-blue-500'}`}>
                        {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
                    </span>
                )}
            </div>
        </article>
    );
});

WeatherDetailCard.displayName = 'WeatherDetailCard';

// Main component with loading states and error handling
const WeatherDetails = ({ 
    feelsLike, 
    humidity, 
    windSpeed, 
    pressure,
    visibility,
    uvIndex,
    loading = false,
    error = null 
}) => {
    const details = [
        { 
            icon: "💧", 
            label: "Humidity", 
            value: humidity, 
            unit: "%",
            description: "Relative humidity",
            color: "from-blue-500 to-cyan-400"
        },
        { 
            icon: "🌡️", 
            label: "Feels Like", 
            value: feelsLike, 
            unit: "°",
            description: "Perceived temperature",
            color: "from-orange-500 to-red-400"
        },
        { 
            icon: "💨", 
            label: "Wind", 
            value: windSpeed, 
            unit: "m/s",
            description: "Wind speed",
            color: "from-teal-500 to-green-400"
        },
        { 
            icon: "📊", 
            label: "Pressure", 
            value: pressure, 
            unit: "hPa",
            description: "Atmospheric pressure",
            color: "from-purple-500 to-pink-400"
        },
        { 
            icon: "👁️", 
            label: "Visibility", 
            value: visibility, 
            unit: "km",
            description: "Clear visibility",
            color: "from-yellow-500 to-orange-400"
        },
        { 
            icon: "☀️", 
            label: "UV Index", 
            value: uvIndex, 
            unit: "",
            description: "Ultraviolet radiation",
            color: "from-red-500 to-orange-500"
        }
    ].filter(detail => detail.value !== undefined && detail.value !== null);

    if (loading) {
        return <WeatherDetailsSkeleton />;
    }

    if (error) {
        return <WeatherDetailsError message={error} />;
    }

    return (
        <section 
            className="w-full md:w-80 lg:w-96"
            aria-label="Weather details"
        >
            {/* Enhanced Header */}
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500" />
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                        Details
                    </h2>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                    Live updates
                </span>
            </div>

            {/* Responsive Grid Layout */}
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                {details.map((detail, index) => (
                    <div
                        key={detail.label}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <WeatherDetailCard
                            icon={detail.icon}
                            label={detail.label}
                            value={detail.value}
                            unit={detail.unit}
                        />
                    </div>
                ))}
            </div>

            {/* Empty state */}
            {details.length === 0 && (
                <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center dark:border-gray-700">
                    <p className="text-gray-500 dark:text-gray-400">
                        No weather data available
                    </p>
                </div>
            )}
        </section>
    );
};

// Loading skeleton
const WeatherDetailsSkeleton = () => (
    <div className="w-full md:w-80 lg:w-96 animate-pulse">
        <div className="mb-6 flex items-center gap-2">
            <div className="h-8 w-1 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-6 w-24 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="space-y-3">
            {[1, 2, 3].map((i) => (
                <div 
                    key={i} 
                    className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-800/50"
                >
                    <div className="h-12 w-12 rounded-lg bg-gray-200 dark:bg-gray-700" />
                    <div className="flex-1 space-y-2">
                        <div className="h-3 w-20 rounded bg-gray-200 dark:bg-gray-700" />
                        <div className="h-6 w-16 rounded bg-gray-200 dark:bg-gray-700" />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// Error state
const WeatherDetailsError = ({ message }) => (
    <div className="w-full md:w-80 lg:w-96 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-900/20">
        <div className="flex items-center gap-3 text-red-700 dark:text-red-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-sm font-medium">{message || 'Failed to load weather details'}</p>
        </div>
    </div>
);

export default WeatherDetails;