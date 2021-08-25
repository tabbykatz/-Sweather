import React from 'react';
import Day from './Day'

const Forecast = (forecast) => {
    let keys = Object.keys(forecast)
    return (<div>
        
        {
        
        keys.forEach((key) =>
            <Day key={key}
                      value={forecast[key]} />
                      
     )}
     </div>)
     }
    


export default Forecast;