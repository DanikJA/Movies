import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
`;

export const MovieList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MovieItem = styled.li`
  background-color: #f4f4f4;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.01);
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 1.2rem;

  &:hover {
    color: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 1.5rem;
  text-align: center;
`;

export const LoadingMessage = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
