import { useEffect, useState } from "react";
import { forecastDetroit } from "../services/weatherforecast.service";
import { Period } from "../types";

export function WeatherForecast() {
  const [periods, setPeriods] = useState<Period[]>([]);

  useEffect(() => {
    getPeriod();
  }, []);

  function getPeriod() {
    forecastDetroit().then((response) => {
      console.log(response.data);
      setPeriods(response.data.properties.periods);
    });
  }

  return (
    <div>
      <h1 className="font-serif font-bold text-blue-500 text-5xl m-4">
        Weather Forecast
      </h1>

      <div className=" m-7 table-c justify-around  ">
        <ul className="space-y-4 md:space-y-0 md:grid grid-cols-4 gap-4 ">
          {periods.map((period) => (
            <li
              className=" bg-blue-100 rounded-xl shadow-md p-10 space-y-4 h-70"
              key={period.name}
            >
              <div className="flex justify-between">
                <div className="text-blue-900 font-bold text-2xl font-serif">
                  {period.name}
                </div>
                <div className="text-5xl">{period.temperature}</div>
              </div>

              <img
                className="h-500 w-500 flex justify-center"
                src={period.icon}
              />

              <div className="text-sm">{period.detailedForecast}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
