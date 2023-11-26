import React from 'react';
import "../styles/Weather.css"


function Weather(props){
    return (
        <div className='weather'>
            <span className="text">{props.weather.dt_txt}</span>
            <span className="badge badge-info">{props.weather.main.temp}°C</span>
        </div>
    )
}

export default Weather;