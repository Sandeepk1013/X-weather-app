import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";


const WeatherDisplay = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city) {
      setLoading(true);
      axios
        .get("https://api.weatherapi.com/v1/current.json", {
          params: {
            key: "a290c59225b24d4e96f50006232712",
            q: city,
          },
        })
        .then((res) => {
          setWeather(res.data);
        })
        .catch((err) => {
          console.error("Error Fetching Data");
          alert("Failed to fetch weather data");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [city]);
  return (
    <div className="weather-display">
      {loading && <p>Loading data...</p>}
      {!loading && weather && (
        <div className="weather-cards">
          <WeatherCard
            title="Temperature"
            data={`${weather.current.temp_c}°C`}
          />
          <WeatherCard title="Humidity" data={`${weather.current.humidity}%`} />
          <WeatherCard
            title="Condition"
            data={`${weather.current.condition.text}°C`}
          />
          <WeatherCard
            title="Temperature"
            data={`${weather.current.wind_kph}kph`}
          />
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;