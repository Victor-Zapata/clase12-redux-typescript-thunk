import axios from "axios";
import { getEstrenos } from "./peliculaSlice";
import { AppDispatch } from "../store";

const API_KEY = "54ff70d898f1d0133d19f5ab82223a1d";

const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`


//función que de forma asincrona dispara una action
export const getMovies = () => {
    const API_KEY = '54ff70d898f1d0133d19f5ab82223a1d'

    return async (dispatch: AppDispatch) => {
        const { data } = await axios.get(baseURL)
        dispatch(getEstrenos({
            estrenos: data.results
        }))
    }
};

// export const getDetailsMovies = (id) => {
//     const API_KEY = '54ff70d898f1d0133d19f5ab82223a1d'

//     return async (dispatch, getState) => {
//         const { data } = await axios.get(https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY});
//         dispatch(getDetails({
//             detalles: data
//         }))
//     }
// };

// export const getTopRatedMovies = () => {
//     const API_KEY = '54ff70d898f1d0133d19f5ab82223a1d'
//     return async (dispatch, getState) => {
//         const { data } = await axios.get(https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY})

//         dispatch(getTopRated({
//             topRated: data.results
//         }))
//     }
// };

// export const getUpcomingMovies = () => {
//     const API_KEY = '54ff70d898f1d0133d19f5ab82223a1d'
//     return async (dispatch, getState) => {
//         const { data } = await axios.get(https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY})
//         dispatch(getUpcoming({
//             upcoming: data.results
//         }))
//     }
// };

// export const getSearchBarValue = (movie) => {
//     const API_KEY = '54ff70d898f1d0133d19f5ab82223a1d'
//     return async (dispatch, getState) => {
//         const { data } = await axios.get(https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie})
//         dispatch(getSearchBar({
//             searchBar: data.results
//         }))
//     }
// };