import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
const BASE_URL = 'https://api.themoviedb.org/3';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
          params: {
            api_key: API_KEY,
          },
        });
        setTrendingMovies(response.data.results);
      } catch (error) {
        setError(true);
      }
    };
    fetchMovies();
  }, []);

  if (error) {
    return <div>Error loading movies!</div>;
  }

  if (trendingMovies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
