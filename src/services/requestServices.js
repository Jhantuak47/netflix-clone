import axios from "axios";
import requests from '../Request';

export function fetchMovies(url) {
    return axios.get(url)
}


export async function getConfiguration() {
    const response =  await axios.get(requests.requestConfiguration);

    return response.data;
}