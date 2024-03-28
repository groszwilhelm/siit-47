import MovieCard from '../components/MovieCard';

import './Carousel.css';

import PropTypes from 'prop-types';


function Carousel({ movies }) {
   const trendingMovies = movies.filter(({ trending }) => trending);

  return (
    <ul className="trending">
      {trendingMovies.map((movie) => (
        <MovieCard key={movie.id} movieElement={movie} large={true}></MovieCard>
      ))}
    </ul>
  );
}

export default Carousel;

Carousel.propTypes = {
  movies: PropTypes.array,
};
