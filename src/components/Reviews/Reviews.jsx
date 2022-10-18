import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilmReviews } from 'components/Services/fetchFilms';
const axios = require('axios').default;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchFilms();

    async function fetchFilms() {
      try {
        const url = fetchFilmReviews(movieId);
        const response = await axios.get(url);

        const {
          data: { results },
        } = response;

        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(({ author, content }) => (
        <li key={author}>
          <h5>Author: {author}</h5>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
