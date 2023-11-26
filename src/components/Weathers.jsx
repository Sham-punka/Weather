import React from 'react';
import Weather from "./Weather";
import "../styles/Weathers.css";

function Weathers(props){

    let [flag, setFlag] = React.useState(false);
    const handleClick = () =>{
        setFlag(flag = !flag)
    }

   return(
       <>
           <button className='button' onClick={handleClick}>5 Дней</button>
           {flag ? props.weathers.map(weather => <Weather key={weather.main.dt} weather={weather}/>) : null}
       </>
   )
}

export default Weathers;