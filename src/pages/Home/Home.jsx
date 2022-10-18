import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchPopularFilms } from '../../components/Services/fetchFilms';
const axios = require('axios').default;

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms();

    async function fetchFilms() {
      try {
        const url = fetchPopularFilms();
        const response = await axios.get(url);

        const {
          data: { results },
        } = response;

        setFilms(results);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {films.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
