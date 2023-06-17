// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getReviewsMovie } from './services/Api'

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getReviewsMovie(movieId);
        setReviews(Reviews);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
  }, [movieId]);

    return (
        <div>
            {reviews.length === 0 ? (<h3>No Reviews.</h3>) : (
                <ul>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <p>
                                <span>Author:</span> {author}
                            </p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>)

}

export default Reviews;