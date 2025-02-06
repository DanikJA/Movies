import { useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = 'https://api.themoviedb.org/3';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!searchQuery) return;
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
        },
      });

      setSearchResults(response.data.results);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for movies"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {error && <div>Error loading movies!</div>}

      <ul>
        {searchResults.map(movie => {
          const imgUrl = movie.poster_path
            ? `${IMAGE_BASE_URL}${movie.poster_path}`
            : null;
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ location }}>
                {imgUrl && <img src={imgUrl} alt={movie.title} />}
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
