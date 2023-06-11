
import { useEffect, useRef } from "react";
import { Suspense } from "react";
import React from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
// import Cast from "components/Cast";
// import Reviews from "components/Reviews";

const MovieDetails = () => {
    
    const { movieId } = useParams();
    // useEffect запрос одного фільму
    const location = useLocation();
    const locationRef = useRef(location.state?.from ?? '/movies')

    return (
        <>
            <Link to={locationRef.current}>Go back</Link>
            <h1>MovieDetails: {movieId}</h1>
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