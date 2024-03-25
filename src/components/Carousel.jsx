import { trendingMovies } from '../data/data';
import MovieCard from '../components/MovieCard';

import './Carousel.css';

function Carousel() {
  return (
    <ul className="trending">
      {trendingMovies.map((movie) => (
        <MovieCard key={movie.id} movieElement={movie} large={true}></MovieCard>
      ))}
    </ul>
  );
}

export default Carousel;
