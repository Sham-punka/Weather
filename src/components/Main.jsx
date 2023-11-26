import React from 'react';
import "../styles/Main.css";
import axios from "axios";
import Weathers from "./Weathers";
import Cities from "./Cities";
import DayWeather from "./DayWeather";


function Main() {

    const [name, setName] = React.useState("Moscow");
    const [weathers, setWeathers] = React.useState([]);
    const [weather, setWeather] = React.useState([]);

    const handleNameChange = (name) => {
        setName(name);

        const WeaUrl = "http://api.openweathermap.org/data/2.5/forecast?q="+name+",ru&APPID=dbfe777341ff0795549ea32fd6f41937&units=metric";
        axios.get(WeaUrl).then(res => {
            setWeathers(res.data.list);
        });

        const OneDayUrl = "https://api.openweathermap.org/data/2.5/weather?q="+name+"&appid=dbfe777341ff0795549ea32fd6f41937&units=metric";
        axios.get(OneDayUrl).then(result => {
            setWeather(result.data.main);
        });

    }

    return(
        <main>
            <Cities onChange={handleNameChange}/>
            <span>
                На какой промежуток времени вас интересует прогноз погоды?
            </span>
            <DayWeather name={name} weathers={weather}/>
            <Weathers name={name} weathers={weathers}/>
        </main>
    );
}

export default Main;