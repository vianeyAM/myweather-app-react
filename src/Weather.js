import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      weatherType: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather-main">
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "2945d86337190216b7c714cd617c298a";
    let city = "Dublin";
    let units = "&units=metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${units}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
