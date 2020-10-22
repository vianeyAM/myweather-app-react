import React from "react";

import "./Weather.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerFull,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  let WeatherData = {
    imgUrl: "https://openweathermap.org/img/wn/10n@2x.png",
    WeatherType: "Rain",
    Temperature: "12",
    FeelsLike: "10",
    Humidity: "15",
    WindSpeed: "17",
  };

  return (
    <div className="row">
      <div className="col-sm img-weather">
        <img
          src={WeatherData.imgUrl}
          alt={WeatherData.WeatherType}
          className="img-fluid"
          id="icon"
        />
        <h3>
          <span id="weatherType">{WeatherData.WeatherType}</span>
        </h3>
      </div>
      <div class="col-sm data-weather">
        <strong id="temperature">{WeatherData.Temperature}</strong>
        <span className="units">
          <a href="#" id="celsius-link" class="active">
            ºC
          </a>{" "}
          |
          <a href="#" id="farenheit-link">
            ºF
          </a>
        </span>
        <div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faThermometerFull} className="icon-data" />
              Feels like: <span id="feels">{WeatherData.FeelsLike}</span>ºC
            </li>
            <li>
              <FontAwesomeIcon icon={faTint} className="icon-data" />
              Humidity: <span id="humidity">{WeatherData.Humidity}</span>%
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} className="icon-data" />
              Wind Speed: <span id="windspeed">
                {WeatherData.WindSpeed}
              </span>{" "}
              Km/H
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
