import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: #333;
  padding: 40px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const NavItem = styled.li`
  margin: 0 15px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #444;
    transform: scale(1.05);
  }

  &.active {
    background-color: #007bff;
    color: white;
  }
`;

export const Main = styled.main`
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 30px;
`;
