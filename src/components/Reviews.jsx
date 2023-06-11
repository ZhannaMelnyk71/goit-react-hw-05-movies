// import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const { movieId } = useParams();

    // useEffect

    return (<div>{movieId} - огляди</div>)

}

export default Reviews;