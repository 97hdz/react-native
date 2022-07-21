import { API_KEY, BASE_URL } from "../config/config"
import axios from 'axios'

// - - - - - - - -TODO : sistemare i type

// export const fetchData : any =  (url : string ) => 
//     axios
//     .get(`https://api.themoviedb.org/3/${url}?api_key=cea4f28e3a1d56f9a1e0c5fe41521799`)
//     .then(function (response) {
//       // handle success
//       return console.log(response.data);
//     })
//     .catch(function (error) {
//       // handle error
//       return console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });


    export async function fetchData ( url : string) {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/${url}?api_key=cea4f28e3a1d56f9a1e0c5fe41521799`);
          console.log(response);
          return response
        } catch (error) {
          console.error(error);
        }
      }

// export const GET : any = async ( url : string) => {    
//     const API_URL : string = `${BASE_URL}${url}?api_key=${API_KEY}` 
//     let response : any = await fetch('https://api.themoviedb.org/3/movie/550?api_key=cea4f28e3a1d56f9a1e0c5fe41521799', {method: 'GET'})
//     response = response.json()
//     return response
// }