import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import {
  Container,
  Header,
  NavList,
  NavItem,
  StyledNavLink,
  Main,
} from './AppStyled.jsx';

const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Container>
        <Header>
          <NavList>
            <NavItem>
              <StyledNavLink to="/">Home</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </NavItem>
          </NavList>
        </Header>

        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Main>
      </Container>
    </Suspense>
  );
};
