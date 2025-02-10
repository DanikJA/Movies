import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 30px;
  background-color: #f4f4f4;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MovieItem = styled.li`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MovieTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
`;

export const NoResults = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
  color: #888;
`;
