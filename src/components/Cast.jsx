import { useParams } from "react-router-dom";


const Cast = () => {

    const { movieId } = useParams();


    // useEffect

    return <div>{movieId} - актори</div>

}

export default Cast;