import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 30px;
  background-color: #f4f4f4;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: #007bff;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const Poster = styled.img`
  width: 250px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const MovieInfo = styled.div`
  margin-left: 30px;
  max-width: 800px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
`;

export const Overview = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 15px;
`;

export const ReleaseDate = styled.p`
  font-size: 1.1rem;
  color: #777;
`;

export const Rating = styled.p`
  font-size: 1.1rem;
  color: #777;
`;

export const Nav = styled.nav`
  margin-top: 20px;

  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0 15px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 1.5rem;
  text-align: center;
`;

export const Loading = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
