import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '9428e4664dfc8e546cca40174948a810';

// trending/movie/{time_window}

export const fetchTrendings = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};


export const getMovieByQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );

  return response.data.results;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const getCastMovie = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data.cast;
};
export const getReviewsMovie = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return data.results;
};