
const WeatherCard = ({city,country,icon,temp,description}) => {
  return (
    <div className='bg-white text-white w-1/4'>
        <a href="#" className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
  <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
    <div className="sm:order-last sm:shrink-0">
      <img src="https://plus.unsplash.com/premium_photo-1670787505459-5ec84cc48762?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="img" className='class="size-16 rounded-full object-cover sm:size-18' />
    </div>

    <div className="mt-4 sm:mt-0">
      <h3 className="text-2xl font-bold text-pretty text-gray-900">
       {temp}°C
      </h3>

      <p className="mt-1 text-sm text-gray-700">{country}</p>

      <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">   
        {description}
      </p>
    </div>
  </div>

  <dl className="mt-6 flex gap-4 lg:gap-6">
    <div className="flex items-center gap-2">
      <dt className="text-gray-700">
        <span className="sr-only"> Published on </span>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"></path>
        </svg>
      </dt>

      <dd className="text-xs text-gray-700">31/06/2025</dd>
    </div>

    <div className="flex items-center gap-2">
      <dt className="text-gray-700">
        <span className="sr-only"> Reading time </span>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path>
        </svg>
      </dt>

      <dd className="text-xs text-gray-700">12 minutes</dd>
    </div>
  </dl>
</a>
    </div>
  )
}

export default WeatherCard