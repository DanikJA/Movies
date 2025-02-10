import {
  Container,
  Title,
  MovieList,
  MovieItem,
  MovieLink,
  ErrorMessage,
  LoadingMessage,
} from './HomePageStyled';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    return <ErrorMessage>Error loading movies!</ErrorMessage>;
  }

  if (trendingMovies.length === 0) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  return (
    <Container>
      <Title>Trending today</Title>
      <MovieList>
        {trendingMovies.map(movie => (
          <MovieItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`}>{movie.title}</MovieLink>
          </MovieItem>
        ))}
      </MovieList>
    </Container>
  );
};

export default HomePage;
