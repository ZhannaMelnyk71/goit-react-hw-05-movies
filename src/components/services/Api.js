import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '9428e4664dfc8e546cca40174948a810';

// trending/movie/{time_window}

export const fetchTrendings = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

// export default {
//   fetchTrendings,
// };