import axios from "axios";
import { WeatherForecast } from "../types";

export function forecastDetroit() {
  return axios.get<WeatherForecast>(
    "https://api.weather.gov/gridpoints/DTX/65,33/forecast"
  );
}
