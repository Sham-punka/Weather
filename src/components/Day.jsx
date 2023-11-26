import React from 'react';

function Day(props){

    return (
        <div className='weather'>
            <h2>Сегодня температура</h2>
            <span className="badge badge-info">{props.weather.temp}°C</span>
        </div>
    )
}

export default Day;