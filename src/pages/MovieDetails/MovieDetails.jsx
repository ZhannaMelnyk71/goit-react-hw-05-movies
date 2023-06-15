
import { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
import React from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { getMovieById } from '../../components/services/Api'
// import Cast from "components/Cast";
// import Reviews from "components/Reviews";

const MovieDetails = () => {
    
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    const location = useLocation();
    const locationRef = useRef(location.state?.from ?? '/movies')

    useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
    }, [movieId]);
    
    console.log(movie)

    return (
        <>
            <Link to={locationRef.current}>Go back</Link>

            {/* <img src={movie.backdrop_path} alt="movie_picture" /> */}
            <h1>{movie.original_title}</h1>
            <h2>Rating: {Math.round(movie.vote_average)}</h2>
            <h2>Overview:</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <ul>{movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}</ul>
            <h2>Additional</h2>
            <ul>
                <li><Link to="cast">Cast</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    )
};

export default MovieDetails;