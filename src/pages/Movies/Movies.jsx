import { useState} from "react";
import { Link } from "react-router-dom";
import { useSearchParams, useLocation } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState(['m-1', 'm-2', 'm-3'])

    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name") ?? "";
    const location = useLocation();

    const updateQueryString = (e) => {
        const nameValue = e.target.value;
        if (nameValue === "") {
            return setSearchParams({});
    }
    setSearchParams({ name: nameValue });
  };


    const searchMovies = movies.filter(movie => movie.includes(name));

    // useEffect запрос списка фільмів
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={updateQueryString} />
            <ul>
                {searchMovies.map(movie => {
                    return (
                        <li key={movie}>
                            <Link to={`${movie}`} state={{ from: location }} >{movie}</Link>
                        </li>
            )
        })}
            </ul>
            
        </div>
        
    )

};

export default Movies;