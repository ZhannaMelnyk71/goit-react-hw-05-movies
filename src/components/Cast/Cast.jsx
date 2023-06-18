import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCastMovie } from '../services/Api'
import css from './Cast.module.css'


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

    return <div className={css.cast_card}>
        <ul className={css.cast_list}>
            {cast.map(({ id, profile_path, original_name, character }) => (
            <li className={css.cast_item} key={id}>
              <img
                src={imageUrl + profile_path}
                alt="actor_picture"
                  width="180"
                  height="220"
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