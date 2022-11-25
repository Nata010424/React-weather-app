import React from "react";
import FormattedDate from "./Date";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-5">
        <div className="col-4">
          <div className="first-block">
            <h1>{props.data.city}</h1>
            <h2>
              {" "}
              <FormattedDate date={props.data.date} />
            </h2>
          </div>
        </div>
        <div className="col-4">
          <div className="main-icon">
            <img alt="" src={props.data.iconUrl} />
          </div>
        </div>

        <div className="col-4">
          <div className="grade">
            <span className="temp">{Math.round(props.data.temperature)}</span>
            <span className="units">
              <a href="/" className="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
            <br />
            <span>{props.data.description}</span>
            <br />
            <span>humidity: {props.data.humidity}%</span>
            <br />
            <span>wind: {Math.round(props.data.wind)} km/hour</span>
          </div>
        </div>
      </div>
    </div>
  );
}
