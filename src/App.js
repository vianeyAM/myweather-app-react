import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="weather-app">
          <Weather defaultCity="Dublin,ie" />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
