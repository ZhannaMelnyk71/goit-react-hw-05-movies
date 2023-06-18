import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams, useLocation } from "react-router-dom";
import { getMovieByQuery } from '../../components/services/Api'
import Loader from '../../components/Loader/Loader'
import css from './Movies.module.css'

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
            <input className={css.movies_input}
                type="text"
                value={query}
                onChange={updateQueryString}
                placeholder="Find the the film"
            />
            {isLoading && <Loader />}
            {/* {falseSearch && (<p>Upps...There is no movies with such name. Please, try again</p>)} */}
            <ul className={css.movies_list}>
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

