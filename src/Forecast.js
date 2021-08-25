import React from 'react';
import Day from './Day'

const Forecast = ({forecast, location}) => {
    let keys = Object.keys(forecast)
    return (<div>
        <span>{location.city}, {location.country}</span>
        {
        
        keys.forEach((key) =>
            <Day key={key}
                      value={forecast[key]} />
                      
     )}
     </div>)
     }
    


export default Forecast;