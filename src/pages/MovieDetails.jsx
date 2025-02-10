import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovieDetails(response.data);
      } catch (error) {
        setError('Failed to fetch movie details');
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={from}>Go back</Link>

      <h1>{movieDetails.title}</h1>
      {movieDetails.poster_path && (
        <img
          src={`${IMAGE_BASE_URL}${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
      )}
      <p>{movieDetails.overview}</p>
      <p>
        <strong>Release Date:</strong>
        {movieDetails.release_date}
      </p>
      <p>
        <strong>Rating:</strong>
        {movieDetails.vote_average}
      </p>

      <nav>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
