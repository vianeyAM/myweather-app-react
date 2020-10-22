import React from "react";
import "./Search.css";

export default function SearchEngine() {
  return (
    <div className="search">
      <form className="form-inline" id="search-form">
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="search"
            className="form-control"
            id="Search-text-input"
            placeholder="Enter a city.."
          />
        </div>
        <button className="btn btn mb-2" type="submit" id="button-search">
          <i className="fas fa-search-location"> Search </i>
        </button>
        <button
          className="btn btn mb-2"
          type="submit"
          id="button-current-location"
        >
          <i className="fas fa-location-arrow"></i>
        </button>
      </form>
    </div>
  );
}
