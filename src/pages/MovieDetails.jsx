import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <div>MovieDetails!!!</div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
