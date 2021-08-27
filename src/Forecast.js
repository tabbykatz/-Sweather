const Forecast = ({ forecast }) => (
  <ul>
    {Object.entries(forecast).map(
      ([date, { temperature, description, icon }]) => (
        <li key={date}>
          <div>{date}</div>
          <div>{Math.round(temperature)}°F</div>
          <div>{description}</div>
          <img src={icon} alt="weather info" />
        </li>
      )
    )}
  </ul>
);

export default Forecast;
