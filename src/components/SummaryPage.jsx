'use client';

import { useState } from 'react';
import { WiDayCloudy } from 'react-icons/wi';
import { FaThermometerHalf, FaThermometerFull, FaThermometerEmpty } from 'react-icons/fa';

const SummaryPage = () => {
  // You can add state for real data fetching
  const [weatherData, setWeatherData] = useState({
    temp: '--',
    description: '--',
    feelsLike: '--',
    minTemp: '--',
    maxTemp: '--',
    icon: '02d'
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f8f9fa] p-5">
      <div className="w-full max-w-[400px]">
        <div className="bg-white rounded-[20px] p-5 shadow-lg hover:translate-y-[-5px] transition-all duration-300 hover:shadow-xl">
          {/* Weather Summary Heading */}
          <div className="text-[22px] font-bold text-center text-[#3f37c9] mb-4">
            Weather Summary
          </div>

          {/* Main Weather Display */}
          <div className="flex flex-col items-center justify-center mb-8">
            {/* Weather Icon */}
            <div className="w-[100px] h-[100px] mb-4 transition-transform duration-300 hover:scale-110">
              {weatherData.icon ? (
                <img 
                  src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                  alt="Weather Icon"
                  className="w-full h-full"
                />
              ) : (
                <WiDayCloudy className="w-full h-full text-[#4361ee]" />
              )}
            </div>

            {/* Temperature and Description */}
            <p className="text-[40px] font-bold text-[#3f37c9]">
              {weatherData.temp}°C
            </p>
            <p className="text-lg capitalize text-[#4cc9f0] mt-1">
              {weatherData.description}
            </p>
          </div>

          {/* Temperature Details */}
          <div className="flex justify-between bg-[rgba(67,97,238,0.1)] rounded-[15px] p-5 
                        hover:bg-[rgba(67,97,238,0.2)] transition-colors duration-300
                        md:flex-row flex-col md:gap-0 gap-4">
            {/* Feels Like */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <FaThermometerHalf className="text-[#4361ee] mr-2" />
                <p className="text-sm text-[#2b2d42]">Feels like</p>
              </div>
              <p className="text-lg font-bold text-[#3f37c9]">
                {weatherData.feelsLike}°C
              </p>
            </div>

            {/* Min Temperature */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <FaThermometerEmpty className="text-[#4361ee] mr-2" />
                <p className="text-sm text-[#2b2d42]">Min</p>
              </div>
              <p className="text-lg font-bold text-[#3f37c9]">
                {weatherData.minTemp}°C
              </p>
            </div>

            {/* Max Temperature */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <FaThermometerFull className="text-[#4361ee] mr-2" />
                <p className="text-sm text-[#2b2d42]">Max</p>
              </div>
              <p className="text-lg font-bold text-[#3f37c9]">
                {weatherData.maxTemp}°C
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;