
import { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
import React from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { getMovieById } from '../../components/services/Api'
import css from './MovieDetails.module.css'

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

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
            <Link className={css.btn_back} to={locationRef.current}>Go back</Link>
            <div className={css.movie_card}>
                <img src={imageUrl + movie.backdrop_path} alt="movie_picture" width="320"/>
                <h1 className={css.movie_name}>{movie.original_title}</h1>
                <h2 className={css.movie_details}>Rating: {Math.round(movie.vote_average)}</h2>
                <h2 className={css.movie_details}>Overview:</h2>
                <p>{movie.overview}</p>
                <h2 className={css.movie_details}>Genres</h2>
                <ul>{movie.genres?.map(genre => (
                    <li className={css.movie_genres_item} key={genre.id}>{genre.name}</li>
                ))}</ul>
                <h2 className={css.movie_details}>Additional</h2>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>
            </div>

            
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    )
};

export default MovieDetails;