import axios from 'axios';

const URL = `https://api.themoviedb.org/3/`;
const KEY = 'aadcea8a3c7e0e5566343c1859f18989';

export const fetchFilms = page =>
  axios.get(`${URL}trending/movies/day?api_key=${KEY}&page=${page}`);
