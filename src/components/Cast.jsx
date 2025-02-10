import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  CastContainer,
  CastList,
  CastItem,
  ActorImage,
  ActorName,
  ActorCharacter,
  ErrorMessage,
  NoCast,
} from './CastStyled';
const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = 'https://api.themoviedb.org/3';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${movieId}/credits`,
          {
            params: {
              api_key: API_KEY,
            },
          }
        );
        setCast(response.data.cast);
      } catch (error) {
        setError('Failed to fetch cast');
      }
    };
    fetchCastData();
  }, [movieId]);

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <CastContainer>
      <h2>Cast</h2>
      {cast.length > 0 ? (
        <CastList>
          {cast.map(actor => (
            <CastItem key={actor.id}>
              {actor.profile_path && (
                <ActorImage
                  src={`${IMAGE_BASE_URL}${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <ActorName>{actor.name}</ActorName>
              <ActorCharacter>Character: {actor.character}</ActorCharacter>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <NoCast>Cast information is not available.</NoCast>
      )}
    </CastContainer>
  );
};

export default Cast;
