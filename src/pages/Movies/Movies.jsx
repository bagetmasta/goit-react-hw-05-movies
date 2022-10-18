import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchFilm } from 'components/Services/fetchFilms';
import { SearchButton } from './Movies.styled';
const axios = require('axios').default;

const Movies = () => {
  const [selectedFilms, setSelectedFilms] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!queryValue) {
      return;
    }

    fetchFilms();

    async function fetchFilms() {
      try {
        const url = searchFilm(queryValue);
        const response = await axios.get(url);

        const {
          data: { results },
        } = response;

        setSelectedFilms(results);
      } catch (error) {
        console.log(error);
      }
    }
  }, [queryValue]);

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue !== '') {
      setSearchParams({ query: inputValue });
    }

    setInputValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search film"
        />
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>
      </form>
      <ul>
        {selectedFilms.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
