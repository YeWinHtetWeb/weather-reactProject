import {useRef} from "react";

// eslint-disable-next-line react/prop-types
const Form = ({fetchWeather})=>{

    const inputValue = useRef('');

    const searchHandaler = (e)=>{
        e.preventDefault();
        fetchWeather(inputValue.current.value);
    }

    return (
        <>
            <div className="w-full">
                <form onSubmit={searchHandaler} className="flex items-center justify-between border-black">
                    <input type="text" ref={inputValue} className="p-2 border rounded outline-none" placeholder="Enter Country..."/>
                    <button className="px-4 py-2 bg-gray-800 text-white rounded">Search</button>
                </form>
            </div>
        </>
    )
}

export default Form;