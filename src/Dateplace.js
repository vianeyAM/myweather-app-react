import React from "react";

import "./Dateplace.css";

export default function ShowDate() {
  let DateData = {
    city: "Dublin",
    date: "Sunday, 27 September",
    hour: "14:30",
  };

  return (
    <div className="overview">
      <h1 id="city">{DateData.city}</h1>
      <ul className="dates-info">
        <li>
          <span id="date">{DateData.date}</span>
        </li>
        <li>
          <span id="hour">{DateData.hour}</span>
        </li>
      </ul>
    </div>
  );
}
