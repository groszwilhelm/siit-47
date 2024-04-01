import PropTypes from "prop-types";

import './MovieCard.css';

// function MovieCard(props) {
// const { movie, wili, key } = props;
function MovieCard({ movieElement, large = false }) {
  const { id, imageUrl, year, rating, category, title } = movieElement;

  return (
    <li className={`movie ${large ? "movie--large" : "movie--small"}`} key={id}>
      <img className="movie__image" src={imageUrl} />
      <div className="movie__bookmark">
        <i className="movie__bookmark-icon" />
      </div>

      <div className='movie__info'>
        <div>
          <span className="movie__year">{year}</span>
          <span className="movie__rating">{rating}</span>
          <span className="movie__category">{category}</span>
        </div>

        <h3 className="movie__title">{title}</h3>
      </div>
    </li>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  large: PropTypes.bool,
  movieElement: PropTypes.shape({
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    year: PropTypes.any,
    rating: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    bookmark: PropTypes.bool,
  }),
};
