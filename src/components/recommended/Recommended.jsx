import { movies } from "../../data/data";
import MovieCard from "../MovieCard";

import PropTypes from 'prop-types';

import "./Recommended.css";

function Recommended({ searchTerm }) {
  const filteredMovies = movies.filter(({ title }) =>
    title.toUpperCase().includes(searchTerm.toUpperCase())
  );
  const moviesNotFound = filteredMovies.length === 0;

  return (
    <section>
      <header>
        <h1>Recommended for you</h1>
      </header>

      {moviesNotFound ? (
        <p>404 There were no movies found for the given search input.</p>
      ) : (
        <ul className="movie-list">
          {filteredMovies.map((movieItem) => (
            <MovieCard
              movieElement={movieItem}
              key={movieItem.id}
              wili="hello"
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Recommended;

Recommended.propTypes = {
  searchTerm: PropTypes.string,
};
