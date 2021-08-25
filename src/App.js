import React, { useState, useEffect } from 'react';
import { backgroundSwitcher, forecastParser, dateBuilder } from './helpers';
import Forecast from './Forecast';


const api = {
  base: "https://api.openweathermap.org/data/2.5/forecast?q=",
  iconBase: " http://openweathermap.org/img/wn/"
}


function App() {
  let [query, setQuery] = useState('');
  let [weather, setWeather] = useState({});
  let [location, setLocation] = useState("")
  let [gotWeather, setGotWeather] = useState(false);


  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}${query}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setLocation(`${data.city.name}, ${data.city.country}`)
          setWeather(weather = forecastParser(data))
          console.log(weather || 'grrrr')
          console.log(location || 'shite')
          //backgroundSwitcher()
          setGotWeather(!gotWeather);
    })
  }
}


  return (
    <div className='app'>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Enter a city name..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {gotWeather &&
        <Forecast forecast={weather} /> }
      </main>
    </div>
  );
}

export default App;