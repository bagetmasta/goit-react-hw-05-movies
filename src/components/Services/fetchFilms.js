const API_KEY = 'dfb50cc3b16f950a5a6b0ea437e17f05';

export const fetchPopularFilms = () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  return url;
};

export const fetchFilmDetails = movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  return url;
};

export const fetchFilmActors = movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;

  return url;
};

export const fetchFilmReviews = movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  return url;
};

export const searchFilm = query => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  return url;
};
