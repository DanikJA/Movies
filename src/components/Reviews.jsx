import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = 'https://api.themoviedb.org/3';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${movieId}/reviews`,
          {
            params: {
              api_key: API_KEY,
            },
          }
        );
        setReviews(response.data.results);
      } catch (error) {
        setError('Problems with fetching reviews');
      }
    };
    fetchReviews();
  }, [movieId]);

  console.log(reviews);

  if (error) {
    return <div>{error}</div>;
  }
  if (reviews.length === 0) {
    return <div>No reviews available</div>;
  }
  return (
    <div>
      {reviews.map(review => (
        <ul key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
        </ul>
      ))}
    </div>
  );
};

export default Reviews;
