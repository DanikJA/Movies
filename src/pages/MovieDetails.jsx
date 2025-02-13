import { Outlet, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import {
  Container,
  BackLink,
  MovieWrapper,
  Poster,
  MovieInfo,
  Title,
  Overview,
  ReleaseDate,
  Rating,
  Nav,
  StyledLink,
  Error,
  Loading,
} from './MovieDetailsStyled';

const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location);
  const from = backLinkRef.current.state?.from ?? '/';

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
    return <Error>{error}</Error>;
  }

  if (!movieDetails) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      <BackLink to={from}>Go back</BackLink>

      <MovieWrapper>
        <Poster
          src={`${IMAGE_BASE_URL}${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <MovieInfo>
          <Title>{movieDetails.title}</Title>
          <Overview>{movieDetails.overview}</Overview>
          <ReleaseDate>
            <strong>Release Date:</strong> {movieDetails.release_date}
          </ReleaseDate>
          <Rating>
            <strong>Rating:</strong> {movieDetails.vote_average}
          </Rating>
        </MovieInfo>
      </MovieWrapper>

      <Nav>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
      </Nav>

      <Outlet />
    </Container>
  );
};

export default MovieDetails;
