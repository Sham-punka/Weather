import React from 'react';
import Day from "./Day";


function DayWeather(props){

    let [flag, setFlag] = React.useState(false);
    const handleClick = () =>{
        setFlag(flag = !flag)
    }




    return(
        <>
            <button className='button'onClick={handleClick}>Сегодня</button>
            {flag ? <Day weather={props.weathers}/> : null}
        </>
    )
}

export default DayWeather