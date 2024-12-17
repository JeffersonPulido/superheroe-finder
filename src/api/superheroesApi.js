import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API;

export const fetchHeroes = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/${query}`)
    return response.data;
}

export const fetchHeroById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`)
    return response.data
}