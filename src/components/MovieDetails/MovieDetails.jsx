import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchFilmDetails } from 'components/Services/fetchFilms';
import {
  Image,
  FilmContainer,
  FilmInfo,
  GenresList,
  GenresItem,
  BackButton,
} from './MovieDetails.styled';
const axios = require('axios').default;

const MovieDetails = () => {
  const [filmDetails, setfilmDetails] = useState([]);
  const location = useLocation();

  const { movieId } = useParams();

  useEffect(() => {
    fetchFilms();

    async function fetchFilms() {
      try {
        const url = fetchFilmDetails(movieId);
        const response = await axios.get(url);

        const { data } = response;

        setfilmDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  const { title, vote_average, overview, genres, poster_path, release_date } =
    filmDetails;

  const year = new Date(release_date).getFullYear();
  const backLinkHref = location?.state?.from ?? '/';

  return (
    <>
      <BackButton to={backLinkHref}>Go back</BackButton>
      <FilmContainer>
        <Image
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <FilmInfo>
          <h2>
            {title} ({year})
          </h2>
          <p>User Score: {vote_average && vote_average.toFixed(1) * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          {genres && (
            <GenresList>
              {genres.map(({ name }) => (
                <GenresItem key={name}>{name}</GenresItem>
              ))}
            </GenresList>
          )}
        </FilmInfo>
      </FilmContainer>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Идет загрузка</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
