import Form from "./components/Form.jsx";
import Card from "./components/Card.jsx";
import {useEffect, useState} from "react";
import {api, api_key} from "./api/apiResource.js";

const App = ()=>{
    const [country, setCountry] = useState('Landon');
    const [data, setData] = useState({});

    const fetchWeather = async (country_name)=>{
        if (country_name !== undefined){
            setCountry(country_name);
        }
        try {
            const res = await api.get(`/data/2.5/weather?q=${country}&appid=${api_key}`)
            setData(res.data)
        }catch (error){
            console.log("error...")
        }

    }

    useEffect(()=>{
        // console.log(data)
        fetchWeather();
    },[])

    return (
        <>
            <div className="w-full min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-white mb-6">Weather App Project</h1>
                <div className="w-80 bg-gray-200 shadow-xl p-3 rounded">
                    <Form fetchWeather={fetchWeather}/>
                    <Card data={data}/>
                </div>
            </div>
        </>
    )
}

export default App;