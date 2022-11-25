import React from "react";
import FormattedDate from "./Date";
import WeatherTemperature from "./WeatherTemperature";
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
            <WeatherTemperature celsius={props.data.temperature} />
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
