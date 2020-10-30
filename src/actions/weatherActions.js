export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = ({
  date,
  city,
  sunrise,
  sunset,
  temp,
  pressure,
  wind,
  error,
}) => ({
  type: FETCH_WEATHER,
  payload: {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    error,
  },
});
