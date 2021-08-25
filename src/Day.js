import React from 'react';

const Day = (date, day) => {
    return <div>
        <date>{date}</date>
        <temp>{day.main.temp}</temp>
        <icon><img src={day.icon} /></icon>
    </div>
}

export default Day;