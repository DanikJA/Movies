import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
`;

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ReviewItem = styled.li`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ReviewerName = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
`;

export const ReviewContent = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
`;

export const NoReviews = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #888;
  margin-top: 20px;
`;
