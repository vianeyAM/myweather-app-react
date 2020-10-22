import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./Search";
import Showdate from "./Dateplace";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="weather-app">
          <Search />
          <Showdate />
          <Weather />
          <Forecast />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
