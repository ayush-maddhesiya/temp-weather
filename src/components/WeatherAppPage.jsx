'use client';

const WeatherAppPage = () => {
  return (
    <div className="min-h-screen bg-[#f0f4f8] flex justify-center items-center p-4 font-sans">
      <div className="w-full max-w-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Card Header */}
        <div className="bg-[#007bff] text-white p-4 text-center">
          <h1 className="text-[1.8rem] font-bold">Hyderabad, IN</h1>
        </div>

        {/* Card Content */}
        <div className="p-4">
          {/* Weather Main */}
          <div className="flex justify-between items-center mb-4">
            <div className="weather-icon">
              <img 
                src="http://openweathermap.org/img/wn/03d@2x.png" 
                alt="scattered clouds"
                className="w-16 h-16"
              />
            </div>
            <div className="ml-4">
              <p className="text-[2.4rem] font-bold text-gray-800">29.2°C</p>
              <p className="text-base text-gray-600 capitalize">scattered clouds</p>
            </div>
            <div className="text-sm text-gray-600">
              <p className="flex items-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w[7rem] h-[7rem] mr-2 text-[#007bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13m-7 6h7"/>
                </svg>
                Feels like: 31.6°C
              </p>
            </div>
          </div>

          {/* Weather Details Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: 'Humidity', value: '61%' },
              { label: 'Wind', value: '4.12 m/s' },
              { label: 'Visibility', value: '6 km' },
              { label: 'Cloudiness', value: '40%' }
            ].map((detail, index) => (
              <div key={index} className="flex items-center text-sm text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#007bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13m-7 6h7"/>
                </svg>
                {detail.label}: {detail.value}
              </div>
            ))}
          </div>

          {/* Sun Info */}
          <div className="flex justify-between">
            {[
              { label: 'Sunrise', value: '05:30 AM' },
              { label: 'Sunset', value: '06:30 PM' }
            ].map((sunDetail, index) => (
              <div key={index} className="flex items-center text-sm text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#007bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13m-7 6h7"/>
                </svg>
                {sunDetail.label}: {sunDetail.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAppPage;