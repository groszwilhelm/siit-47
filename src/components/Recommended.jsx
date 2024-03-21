import { movies } from './data';
import MovieCard from './MovieCard';

import './Recommended.css';

function Recommended() {
  return (
    <section>
      <header>
        <h1>Recommended for you</h1>
      </header>

      <ul className="movie-list">
        {movies.map((movieItem) => (
          <MovieCard movieElement={movieItem} key={movieItem.id} wili="hello" />
        ))}
      </ul>
    </section>
  );
}

export default Recommended;
