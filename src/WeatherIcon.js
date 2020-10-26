import React from "react";

import * as Icons from "@intern0t/react-weather-icons";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "DaySunny",
    "01n": "NightClear",
    "02d": "DayCloudy",
    "02n": "NightCloudy",
    "03d": "Rain",
    "03n": "Rain",
  };
  return <Icons.{codeMapping[props.code]} color="#D685B1" size={150} />;
}
