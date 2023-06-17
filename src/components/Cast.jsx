import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCastMovie } from '../components/services/Api'


const imageUrl = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {

    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);

    return <div>
        <ul>
            {cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                src={imageUrl + profile_path}
                alt="actor_picture"
              />
              <p>
                <span> Actor:</span> {original_name}
              </p>
              <p>
                <span>Character:</span> {character}
              </p>
            </li>
          ))}
        </ul>
    </div>

}

export default Cast;