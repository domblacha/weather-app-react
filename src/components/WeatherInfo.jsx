import React from "react";
import { connect } from "react-redux";
const WeatherInfo = ({ weather }) => {
  const { city, date, temp, sunrise, sunset, wind, pressure, error } = weather;
  let content = null;

  if (!error && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div style={{ textAlign: "center" }}>
        <h3>
          Wyniki wyszukiwania dla: <em>{city}</em>
        </h3>
        <h4>Pogoda dla dnia i godziny: {date}</h4>
        <h4>Temperatura {Math.floor(temp)} C</h4>
        <h4>Wschód słóńca {sunriseTime}</h4>
        <h4>Zachód słóńca {sunsetTime}</h4>
        <h4>Siła wiatru {wind}</h4>
        <h4>Ciśnienie {pressure}</h4>
      </div>
    );
  }
  const weatherInfo = error ? `Not found: ${city}` : content;
  return <div>{weatherInfo}</div>;
};

const connectReduxStateToProps = (store) => ({
  weather: store.weather,
});

const WeatherInfoConsumer = connect(connectReduxStateToProps)(WeatherInfo);

export default WeatherInfoConsumer;
