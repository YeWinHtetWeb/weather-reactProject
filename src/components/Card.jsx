import {WiNightCloudyGusts} from "react-icons/wi";
import {useEffect, useState} from "react";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';

// eslint-disable-next-line react/prop-types
const Card = ({data})=>{

    // eslint-disable-next-line react/prop-types
    // console.log(data.weather[0].icon);
    const [value, setValue] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    if (JSON.stringify(data) !== "{}"){
        return (
            <>
                <div className="w-full p-5 flex flex-col justify-center items-center gap-4">
                    <Clock value={value} />
                    {/* eslint-disable-next-line react/prop-types */}
                    <h1 className="text-3xl font-bold">{data.name}, {data.sys.country}</h1>
                    {/* eslint-disable-next-line react/prop-types */}
                    <h1 className="text-4xl font-bold">
                        {/* eslint-disable-next-line react/prop-types */}
                        <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} className="inline-block" alt=""/>
                        {/* eslint-disable-next-line react/prop-types */}
                        {data.main.temp}°C</h1>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span><WiNightCloudyGusts className="inline-block"/> {data.wind.speed}mm</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span>Weather: {data.weather[0].main}</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span>humidity: {data.main.humidity}</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span>Visibility: {data.visibility /1000}km</span>
                </div>
            </>
        )
    }


}

export default Card;