import React from "react";

import ForecastIcon from "./ForecastIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperatureMin() {
    let temperatureMin = Math.round(props.data.main.temp_min);
    return `${temperatureMin}ºC`;
  }

  function temperatureMax() {
    let temperatureMax = Math.round(props.data.main.temp_max);
    return `${temperatureMax}ºC`;
  }

  return (
    <div className="col-sm box-day">
      <strong>{hours()}</strong>
      <div className="icon-forecast">
        <ForecastIcon code={props.data.weather[0].icon} />
      </div>
      <div className="temp-minmax">
        <span className="temp-min">
          <FontAwesomeIcon icon={faTemperatureLow} className="icon-tempmin" />{" "}
          {temperatureMin()}
        </span>
        <span className="temp-max">
          <FontAwesomeIcon icon={faTemperatureHigh} className="icon-tempmax" />{" "}
          <strong>{temperatureMax()}</strong>
        </span>
      </div>
    </div>
  );
}
