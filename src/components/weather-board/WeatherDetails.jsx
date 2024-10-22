import React from "react";
import cloud from "../../assets/icons/cloud.svg";
import humidity from "../../assets/icons/humidity.svg";
import maxTemp from "../../assets/icons/temp-max.svg";
import minTemp from "../../assets/icons/temp-min.svg";
import wind from "../../assets/icons/wind.svg";
import useWeather from "../../hooks/useWeather";

function WeatherDetails(props) {
  const { weatherData } = useWeather();
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        The climate is <u>{weatherData.climate}</u>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{weatherData.maxTemperature}°</p>
            <img src={maxTemp} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{weatherData.minTemperature}°</p>
            <img src={minTemp} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{weatherData.humidity}%</p>
            <img src={humidity} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{weatherData.cloudPercentage}%</p>
            <img src={cloud} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{weatherData.wind}km/h</p>
            <img src={wind} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WeatherDetails;
