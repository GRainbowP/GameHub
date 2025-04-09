import axios from "axios";


const API_KEY = import.meta.env.VITE_APP_API_KEY;
const API_URL = 'https://rawg.io/api/';

const apiClient = axios.create({
    baseURL: API_URL,
    params: {
        key: API_KEY,
    }
})

export default apiClient