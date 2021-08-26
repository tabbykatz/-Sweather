import * as React from "react";
import { responseParser } from "./helpers";

const api = {
  base: "https://api.openweathermap.org/data/2.5/forecast?q=",
  iconBase: " http://openweathermap.org/img/wn/",
};

function App() {
  let [query, setQuery] = React.useState("");
  let [weather, setWeather] = React.useState({});

  let shouldDisplayForecast = Object.keys(weather).length > 0;
  console.log({ weather, shouldDisplayForecast });

  const search = () => {
    fetch(
      `${api.base}${query}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setWeather(responseParser(data));
      });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <div className="app">
      <main>
        <form onSubmit={onSubmit} className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter a city name..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </form>
        {shouldDisplayForecast ? (
          <pre>{JSON.stringify(weather, null, 2)}</pre>
        ) : null}
      </main>
    </div>
  );
}

export default App;
