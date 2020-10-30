import "./App.css";
import { Provider } from "react-redux";
import store from "../store/store";
import FetchWeather from "./FetchWeather";
import WeatherInfo from "./WeatherInfo";

function App() {
  return (
    <Provider store={store}>
      <FetchWeather />
      <WeatherInfo />
    </Provider>
  );
}

export default App;
