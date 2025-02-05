import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = 'https://api.themoviedb.org/3';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);

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
    <div
      style={{
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search for movies"
          onChange={handleChange}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>
          Search
        </button>
      </form>

      {error && <div>Error loading movies!</div>}

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '0',
          margin: '0',
        }}
      >
        {searchResults.map(movie => {
          const imgUrl = movie.poster_path
            ? `${IMAGE_BASE_URL}${movie.poster_path}`
            : null;
          return (
            <li
              key={movie.id}
              style={{
                listStyleType: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                width: '200px',
                marginBottom: '10px',
                padding: '8px',
                transition: 'all 0.3s ease',
              }}
            >
              <Link
                to={`/movies/${movie.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                {imgUrl && (
                  <img
                    src={imgUrl}
                    alt={movie.title}
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      height: 'auto',
                    }}
                  />
                )}
                <span style={{ fontSize: '16px', fontWeight: '500' }}>
                  {movie.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
