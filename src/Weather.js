import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchLocation,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [country, setCountry] = useState(props.defaultCountry);

  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      weatherType: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "2945d86337190216b7c714cd617c298a";
    let units = "&units=metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for a city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather-main">
        <div className="search">
          <form className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="search"
                className="form-control"
                autoFocus="on"
                placeholder="Enter a city.."
                onChange={handleCityChange}
              />
            </div>
            <button className="btn btn mb-2" type="submit">
              <FontAwesomeIcon
                icon={faSearchLocation}
                className="icon-search"
              />
              Search
            </button>
            <button className="btn btn mb-2" type="submit">
              <FontAwesomeIcon icon={faLocationArrow} />
            </button>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
