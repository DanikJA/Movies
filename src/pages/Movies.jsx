import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  SearchForm,
  SearchInput,
  SearchButton,
  ErrorMessage,
  MovieList,
  MovieItem,
  PosterImage,
  MovieTitle,
  NoResults,
} from './MovieStyled';
const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = 'https://api.themoviedb.org/3';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.searchResults) {
      setSearchResults(location.state.searchResults);
    }
  }, [location.state]);

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
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search for movies"
          onChange={handleChange}
          value={searchQuery}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>

      {error && <ErrorMessage>Error loading movies!</ErrorMessage>}

      {searchResults.length > 0 ? (
        <MovieList>
          {searchResults.map(movie => {
            const imgUrl = movie.poster_path
              ? `${IMAGE_BASE_URL}${movie.poster_path}`
              : null;
            return (
              <MovieItem key={movie.id}>
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: location.pathname, searchResults }}
                >
                  {imgUrl && <PosterImage src={imgUrl} alt={movie.title} />}
                  <MovieTitle>{movie.title}</MovieTitle>
                </Link>
              </MovieItem>
            );
          })}
        </MovieList>
      ) : (
        <NoResults>No results found</NoResults>
      )}
    </Container>
  );
};

export default Movies;
