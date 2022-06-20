import "./App.css";

import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemparatureAndDetails from "./components/TemparatureAndDetails";
import Forcast from "./components/Forcast";
import getFormattedWeatherData from "./utils/weatherUtils";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "accra" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units}).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground =() =>{
    if (!weather ) return "from-cyan-700 to-blue-700"
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700"

    return 'from-yellow-700 to-orange-700' 
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemparatureAndDetails  weather={weather}/>
          <Forcast title="hourly forcast"  items={weather.hourly}/>
          <Forcast title="daily forcast" items={weather.daily}/>
        </>
      )}
    </div>
  );
}

export default App;
