import React from "react";
import "./Forecast.css";

import * as Icons from "@intern0t/react-weather-icons";

export default function Forecast() {
  return (
    <div className="row forecast" id="forecast">
      <div class="col-sm box-day">
        <strong>12:00</strong>
        <div className="icon-forecast">
          <Icons.Cloudy color="#FF8B33" size={50} />
        </div>
        <div>
          <strong>12º</strong> |<span>20º</span>
        </div>
      </div>
      <div class="col-sm box-day">
        <strong>15:00</strong>
        <div className="icon-forecast">
          <Icons.DayRainMix color="#FF8B33" size={50} />
        </div>
        <div>
          <strong>12º</strong> |<span>20º</span>
        </div>
      </div>
      <div class="col-sm box-day">
        <strong>18:00</strong>
        <div className="icon-forecast">
          <Icons.DayRain color="#FF8B33" size={50} />
        </div>
        <div>
          <strong>12º</strong> |<span>20º</span>
        </div>
      </div>
      <div class="col-sm box-day">
        <strong>21:00</strong>
        <div className="icon-forecast">
          <Icons.Cloudy color="#FF8B33" size={50} />
        </div>
        <div>
          <strong>12º</strong> |<span>20º</span>
        </div>
      </div>
      <div class="col-sm box-day">
        <strong>00:00</strong>
        <div className="icon-forecast">
          <Icons.DayRainMix color="#FF8B33" size={50} />
        </div>
        <div>
          <strong>12º</strong> |<span>20º</span>
        </div>
      </div>
    </div>
  );
}
