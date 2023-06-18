// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getReviewsMovie } from '../services/Api';
import css from './Reviewes.module.css'

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
        <div className={css.reviewes_container}>
            {reviews.length === 0 ? (<h3>No Reviews.</h3>) : (
                <ul className={css.reviews_list}>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <p>
                                <span className={css.reviewes_autor}>Author:</span> {author}
                            </p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>)

}

export default Reviews;