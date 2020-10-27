import React from "react";

import "weather-icons/css/weather-icons.css";
export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "wi-day-sunny",
    "01n": "wi-night-clear",
    "02d": "wi-day-cloudy",
    "02n": "wi-night-alt-cloudy",
    "03d": "wi-cloud",
    "03n": "wi-cloud",
    "04d": "wi-cloudy",
    "04n": "wi-cloudy",
    "09d": "wi-rain",
    "09n": "wi-rain",
    "10d": "wi-day-rain",
    "10n": "wi-night-rain",
    "11d": "wi-thunderstorm",
    "11n": "wi-thunderstorm",
    "13d": "wi-snow",
    "13n": "wi-snow",
    "50d": "wi-fog",
    "50n": "wi-fog",
  };
  return <i className={`wi ${codeMapping[props.code]} display-1`} />;
}
