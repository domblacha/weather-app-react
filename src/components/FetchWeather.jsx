import React, { useState } from "react";
import { API_KEY } from "../index";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/weatherActions";
const FetchWeather = ({
  date,
  city,
  sunrise,
  sunset,
  temp,
  pressure,
  wind,
  fetchWeather,
}) => {
  const [cityName, setCityName] = useState("");
  const handleCityName = (e) => setCityName(e.target.value);
  const onSubmitCityHandler = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(API)
      .then((respons) => {
        if (respons.ok) {
          return respons;
        }
        throw console.warn("Ooops something went wrong!");
      })
      .then((respons) => respons.json())
      .then((data) => {
        const date = new Date().toLocaleString();
        const weatherObject = {
          error: false,
          date,
          city: cityName,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
        };
        fetchWeather(weatherObject);
      })
      .catch((err) => {
        const weatherObjectErr = {
          error: true,
          date,
          city: cityName,
          sunrise: "",
          sunset: "",
          temp: "",
          pressure: "",
          wind: "",
        };
        fetchWeather(weatherObjectErr);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={onSubmitCityHandler}>
        <label>
          Wpisz miasto:
          <input type="text" value={cityName} onChange={handleCityName} />
        </label>
        <button>Szukaj</button>
      </form>
    </div>
  );
};

const connectActionsToProps = {
  fetchWeather,
};
const FetchWeatherConsumer = connect(null, connectActionsToProps)(FetchWeather);
export default FetchWeatherConsumer;
