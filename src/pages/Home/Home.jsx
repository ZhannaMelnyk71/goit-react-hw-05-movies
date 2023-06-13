import { useState, useEffect } from "react";
import { fetchTrendings } from '../../components/services/Api';
import { Link } from "react-router-dom";

const Home = () => {

    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
    
console.log(films)
    return (
        <div>
            <h1>Trending today</h1>
            <ul>
                {films.map(film => {
                    return (
                        <li key={film.id}> 
                            <Link to={`/movies/${film.id}`} >{film.title}</Link>
                        </li>
            )
        })}
            </ul>
            
        </div>
    )

}

export default Home;