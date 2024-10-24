"use client";

import { useState } from "react";

const Preferences = () => {
  const [activeTab, setActiveTab] = useState("unit");
  const [alertsEnabled, setAlertsEnabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dbeafe] via-[#e0e7ff] to-[#f3e8ff] font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,sans-serif]">
        <div className="w-full max-w-[32rem] bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-6">
            <h1 className="text-[1.875rem] font-bold text-[#3b82f6] m-0">
              Weather Monitor
            </h1>
            <p className="text-[#64748b] mt-2">
              Set up your weather monitoring preferences
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label
                htmlFor="city"
                className="block text-sm font-medium mb-2 text-black"
              >
                City
              </label>
              <div className="relative">
                <select
                  id="city"
                  className="w-full py-2 px-4 text-sm bg-[#d1d5db] border border-[#6b7280] rounded 
                          focus:border-[#3b82f6] transition-colors text-black duration-200 outline-none"
                >
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div>
            </div>

            <div className="flex mb-4">
              <div
                className={`flex-1 text-center text-black py-2 cursor-pointer transition-colors duration-200
                         ${
                           activeTab === "unit"
                             ? "bg-[#3b82f6] text-white"
                             : "bg-[#f1f5f9] text-[#64748b]"
                         }
                         ${activeTab === "unit" ? "rounded-l" : ""}`}
                onClick={() => setActiveTab("unit")}
              >
                Temperature Unit
              </div>
              <div
                className={`flex-1 text-center text-black py-2 cursor-pointer transition-colors duration-200
                         ${
                           activeTab === "alerts"
                             ? "bg-[#3b82f6] text-white"
                             : "bg-[#f1f5f9] text-[#64748b]"
                         }
                         ${activeTab === "alerts" ? "rounded-r" : ""}`}
                onClick={() => setActiveTab("alerts")}
              >
                Alerts
              </div>
            </div>

            <div className={`${activeTab === "unit" ? "block" : "hidden"}`}>
              <div className="mb-6">
                <label className="block text-sm text-black font-medium mb-2">
                  Select Unit
                </label>
                <div className="flex gap-4">
                  <label className="flex text-black items-center cursor-pointer">
                    <input
                      type="radio"
                      name="unit"
                      value="celsius"
                      defaultChecked
                      className="mr-2"
                    />
                    Celsius (°C)
                  </label>
                  <label className="flex text-black items-center cursor-pointer">
                    <input
                      type="radio"
                      name="unit"
                      value="fahrenheit"
                      className="mr-2"
                    />
                    Fahrenheit (°F)
                  </label>
                  <label className="flex text-black items-center cursor-pointer">
                    <input
                      type="radio"
                      name="unit"
                      value="kelvin"
                      className="mr-2"
                    />
                    Kelvin (K)
                  </label>
                </div>
              </div>
            </div>

            <div className={`${activeTab === "alerts" ? "block" : "hidden"}`}>
              <div className="mb-6">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={alertsEnabled}
                    onChange={(e) => setAlertsEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
                          peer-checked:after:translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                          after:bg-white after:border-gray-300 after:border after:rounded-full 
                          after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3b82f6]"
                  ></div>
                  <span className="ml-3 text-sm font-medium text-black">
                    Enable temperature alerts
                  </span>
                </label>
              </div>

              {alertsEnabled && (
                <div className="space-y-6">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-black text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3">📧</span>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        className="w-full py-2 text-black pl-10 pr-4 text-sm bg-[#d1d5db] border border-[#6b7280] 
                           rounded focus:border-[#3b82f6] transition-colors duration-200 outline-none"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="maxTemp"
                      className="text-black block text-sm font-medium mb-2"
                    >
                      Minimum Temperature (Celsius)
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute  left-3">🌡️</span>
                      <input
                        type="number"
                        id="maxTemp"
                        placeholder="Enter maximum temperature"
                        className="w-full py-2 text-black pl-10 pr-4 text-sm bg-[#d1d5db] border border-[#6b7280] 
                               rounded focus:border-[#3b82f6] transition-colors duration-200 outline-none"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="maxTemp"
                      className="text-black block text-sm font-medium mb-2"
                    >
                      Maximum Temperature
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute  left-3">🔥</span>
                      <input
                        type="number"
                        id="maxTemp"
                        placeholder="Enter maximum temperature"
                        className="w-full py-2 text-black pl-10 pr-4 text-sm bg-[#d1d5db] border border-[#6b7280] 
                               rounded focus:border-[#3b82f6] transition-colors duration-200 outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 text-sm font-medium text-white bg-[#3b82f6] rounded
                     hover:bg-[#2563eb] transition-colors duration-200 flex items-center justify-center"
            >
              Save Settings
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Preferences;
