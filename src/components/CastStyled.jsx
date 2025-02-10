import styled from 'styled-components';

export const CastContainer = styled.div`
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
`;

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
`;

export const CastItem = styled.li`
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ActorImage = styled.img`
  width: 100%;
  max-width: 120px;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ActorName = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: #333;
`;

export const ActorCharacter = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 1.2rem;
  text-align: center;
`;

export const NoCast = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #888;
`;
