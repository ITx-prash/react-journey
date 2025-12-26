import axios from "axios";
import { useState, useEffect } from "react";
import { IconFidgetSpinner } from "@tabler/icons-react";
import { TiWeatherStormy } from "react-icons/ti";
const Weather = () => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [userSearch, setUserSearch] = useState("");
  //after searched city found: receiving from api
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCoords, setSelectedCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //for dropdown city list
  const cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&limit=5&appid=${API_KEY}`;

  useEffect(() => {
    if (userSearch.length < 3) {
      setCitySuggestions([]);
      return;
    }

    // Debounce: delay API call until user stops typing
    const timeoutId = setTimeout(() => {
      const handleCityApiCall = async () => {
        try {
          setLoading(true);

          const res = await axios.get(cityUrl);
          const cityData = res.data;

          if (res && cityData && cityData.length) {
            const cities = [];

            cityData.map((indiCity) =>
              cities.push({
                city: indiCity.name,
                country: indiCity.country,
                state: indiCity.state,
                lat: indiCity.lat,
                lon: indiCity.lon,
              }),
            );

            setCitySuggestions(cities);
          } else {
            setCitySuggestions([]);
          }

          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
          setCitySuggestions([]);
        }
      };

      handleCityApiCall();
    }, 500); // Wait 500ms after user stops typing

    // Cleanup: cancel the timeout if userSearch changes again
    return () => clearTimeout(timeoutId);
  }, [userSearch, cityUrl, API_KEY]);

  //after user selects any city
  useEffect(() => {
    if (!selectedCoords) return;
    setWeatherData(null);
    setCitySuggestions([]);
    const handleWeatherApiCall = async () => {
      setError(null);
      setUserSearch("");
      setLoading(true);

      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCoords.lat}&lon=${selectedCoords.lon}&appid=${API_KEY}`,
        );
        const weatherInfo = res.data;
        setWeatherData(weatherInfo);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    handleWeatherApiCall();
  }, [selectedCoords, API_KEY]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4">
      <div className="relative w-md">
        <div className="flex flex-col items-center justify-center">
          <TiWeatherStormy className="my-6 w-full text-6xl text-gray-700" />
          <input
            type="text"
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
            className="w-full rounded-lg border-2 border-neutral-700 px-3 py-1 text-neutral-600 placeholder:text-neutral-600 placeholder:italic focus:border-neutral-500 focus:outline-none"
            placeholder="Enter city to search"
          />
          {error && <p className="mt-2 font-medium text-red-500">{error}</p>}
        </div>

        {/* for dropdown */}
        {loading && (
          <IconFidgetSpinner className="absolute mt-4 w-full animate-spin text-center" />
        )}

        {citySuggestions.length ? (
          <div className="absolute mt-2 w-full rounded-xl bg-white shadow-lg">
            <ul className="flex w-full flex-col gap-0.5">
              {citySuggestions.map((indiCity, idx) => (
                <li
                  key={indiCity.lat - idx}
                  className="cursor-pointer px-4 py-2 transition-all duration-200 hover:bg-gray-200"
                  onClick={() =>
                    setSelectedCoords({ lat: indiCity.lat, lon: indiCity.lon })
                  }
                >
                  <div className="flex items-center justify-start gap-2 border-b border-gray-400">
                    {indiCity.state ? (
                      <>
                        <div className="">
                          <span className="font-bold">{indiCity.city}</span>

                          <span className="text-gray-500">
                            , {indiCity.state}
                          </span>
                        </div>
                        <span className="text-gray-500">
                          ({indiCity.country})
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="font-bold">{indiCity.city}</span>
                        <span className="text-gray-500">
                          ({indiCity.country})
                        </span>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* for details after city selection */}
        {weatherData && weatherData.name ? (
          <div className="mt-2 flex w-full flex-col items-center rounded-t-lg bg-white p-4 shadow-lg">
            <h2 className="text-2xl font-bold">{weatherData.name}</h2>
            <p className="text-gray-500">
              {" "}
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-3xl font-bold">
              {(weatherData.main.temp - 273.15).toFixed(1)} &deg;C
            </p>
            <p className="capitalize">{weatherData.weather[0].description}</p>
            <div className="flex w-full justify-between">
              <div className="text-center">
                <p className="text-sm text-gray-400">Wind</p>
                <p className="font-semibold">{weatherData.wind.speed} m/s</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Humidity</p>
                <p className="font-semibold">{weatherData.main.humidity}%</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Weather;
