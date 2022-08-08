import React from "react";
import "./App.css";
import { Quotes } from "./component/Quotes";
import { WeatherForecast } from "./component/WeatherForecast";

function App() {
  return (
    <div>
      <WeatherForecast />
      <Quotes />
    </div>
  );
}

export default App;
