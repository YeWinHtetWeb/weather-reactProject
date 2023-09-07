import axios from "axios";


export const api = axios.create(
    {
        baseURL: "https://api.openweathermap.org"
    }
);

export const api_key = "1e6db454c1b05c2924af30f56a6ac350\n";