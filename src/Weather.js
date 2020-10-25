import React, { useState } from "react";
import axios from "axios";

import ShowDate from "./Dateplace";

import "./Weather.css";
import * as Icons from "@intern0t/react-weather-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerFull,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    setweatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      weatherType: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="overwiew">
        <h1 id="city">{weatherData.city}</h1>
        <p>
          <ShowDate />
        </p>
        <div className="row">
          <div className="col-sm img-weather">
            <Icons.Rain color="#D685B1" size={150} id="icon" />
            <h3>
              <span id="weatherType">{weatherData.weatherType}</span>
            </h3>
          </div>
          <div class="col-sm data-weather">
            <strong id="temperature">
              {Math.round(weatherData.temperature)}
            </strong>
            <span className="units">
              <button className="links btn btn" id="celsius-link">
                ºC
              </button>
              |
              <button className="links btn btn" id="farenheit-link">
                ºF
              </button>
            </span>
            <div>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faThermometerFull}
                    className="icon-data"
                  />
                  {""}Feels like:{" "}
                  <span id="feels">{Math.round(weatherData.feelsLike)}</span>
                  ºC
                </li>
                <li>
                  <FontAwesomeIcon icon={faTint} className="icon-data" />
                  {""}Humidity:{" "}
                  <span id="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  <FontAwesomeIcon icon={faWind} className="icon-data" />
                  {""}Wind Speed:{" "}
                  <span id="windspeed">
                    {Math.round(weatherData.windSpeed)}
                  </span>{" "}
                  Km/H
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2945d86337190216b7c714cd617c298a";
    let units = "&units=metric";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${apiKey}${units}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
