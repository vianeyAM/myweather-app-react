import React from "react";

import "./Weather.css";

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
              <i className="fas fa-thermometer-full icon-data"></i>
              Feels like: <span id="feels">{WeatherData.FeelsLike}</span>ºC
            </li>
            <li>
              <i className="fas fa-tint icon-data"></i>
              Humidity: <span id="humidity">{WeatherData.Humidity}</span>%
            </li>
            <li>
              <i className="fas fa-wind icon-data"> </i>
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
