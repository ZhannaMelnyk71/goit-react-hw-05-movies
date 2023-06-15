import { useState, useEffect } from "react";
import { fetchTrendings } from '../../components/services/Api';
import { Link, useLocation } from "react-router-dom";
import Loader from '../../components/Loader/Loader'

const Home = () => {

    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {

        const fetchTrendingFilms = () => {
            setIsLoading(true);

            fetchTrendings().then(trendingFilms => {
                setFilms(trendingFilms);
            })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {setIsLoading(false)});
        };
        
        fetchTrendingFilms();

    }, []);
    
// console.log(films)
    return (
        <div>
            <h1>Trending today</h1>
            <ul>
                {films.map(film => {
                    return (
                        <li key={film.id}> 
                            <Link to={`/movies/${film.id}`} state={{ from: location }} >{film.title}</Link>
                        </li>
            )
        })}
            </ul>
            {isLoading && <Loader />}
        </div>
    )

}

export default Home;