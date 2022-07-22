import { API_KEY, BASE_URL } from "../config/config"
import axios from 'axios'

export async function fetchData(url: string) {
    try {
        const response = await axios.get(`${BASE_URL}${url}?api_key=${API_KEY}`);
        console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}
