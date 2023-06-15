import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams, useLocation } from "react-router-dom";
// import { fetchSearchByKeyword } from '../../components/services/Api';
import { getMovieByQuery } from '../../components/services/Api'
import Loader from '../../components/Loader/Loader'

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
 
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
    const location = useLocation();

    const updateQueryString = (e) => {
        const queryValue = e.target.value;
        if (queryValue === "") {
            return setSearchParams({});
    }
    setSearchParams({ query: queryValue });
    };
    
useEffect(() => {
    if (!query) return;
    setIsLoading(true);

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await getMovieByQuery(query);
        setMovies(movieByQuery);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieByQuery();
    setIsLoading(false);
  }, [searchParams, query]);

    
    // const searchMovies = movies.filter(movie => movie.includes(query.toLowerCase()));
    // console.log(searchMovies)
    
    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={updateQueryString} />
            {isLoading && <Loader />}
            {/* {falseSearch && (<p>Upps...There is no movies with such name. Please, try again</p>)} */}
            <ul>
                {movies.map(({ id, original_title }) => {
                    return (
                        <li key={id}>
                            <Link to={`${id}`} state={{ from: location }} >{original_title}</Link>
                        </li>
            )
        })}
            </ul>
            
        </div>
        
    )

};

export default Movies;

