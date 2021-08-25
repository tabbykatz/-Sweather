import React from 'react';

const Day = ({date, day}) => {
    return <div>
        <span>{date}</span>
        <div>{day.main.temp}</div>
        <div><img src={day.icon} /></div>
    </div>
}

export default Day;