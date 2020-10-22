import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./Search";
import Showdate from "./Dateplace";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="weather-app">
          <Search />
          <Showdate />
        </div>
      </header>
    </div>
  );
}

export default App;
