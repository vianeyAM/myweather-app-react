import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

import WeatherIcon from "./WeatherIcon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerFull,
  faTint,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props) {
  return (
    <div className="Weather-info">
      <div className="date-place">
        <h1>{props.data.city}</h1>
        <div>
          <FormatDate date={props.data.date} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm img-weather">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <h3>
            <span id="weatherType">{props.data.weatherType}</span>
          </h3>
        </div>
        <div class="col-sm data-weather">
          <WeatherTemperature celsius={props.data.temperature} />

          <div>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faThermometerFull}
                  className="icon-data"
                />{" "}
                Feels like:{" "}
                <span id="feels">{Math.round(props.data.feelsLike)}</span> ºC
              </li>
              <li>
                <FontAwesomeIcon icon={faTint} className="icon-data" />{" "}
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                <FontAwesomeIcon icon={faWind} className="icon-data" /> Wind
                Speed:{" "}
                <span id="windspeed">{Math.round(props.data.windSpeed)}</span>{" "}
                Km/H
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
