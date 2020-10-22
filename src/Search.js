import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchLocation,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faSearchLocation} className="icon-search" />
          Search
        </button>
        <button
          className="btn btn mb-2"
          type="submit"
          id="button-current-location"
        >
          <FontAwesomeIcon icon={faLocationArrow} />
        </button>
      </form>
    </div>
  );
}
