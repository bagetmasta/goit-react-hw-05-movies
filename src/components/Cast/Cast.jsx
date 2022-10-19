import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilmActors } from 'components/Services/fetchFilms';
import { Image } from './Cast.styled';
const axios = require('axios').default;

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchFilms();

    async function fetchFilms() {
      try {
        const url = fetchFilmActors(movieId);
        const response = await axios.get(url);

        const {
          data: { cast },
        } = response;

        setActors(cast);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  return actors.map(({ character, name, profile_path }) => (
    <ul key={name}>
      <Image
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : 'https://ods-metering-systems.com/wp-content/uploads/2017/02/NoImageAvailable-1.gif'
        }
        alt="photo"
      />
      <li>
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    </ul>
  ));
};

export default Cast;
