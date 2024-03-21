import PropTypes from "prop-types";

// function MovieCard(props) {
// const { movie, wili, key } = props;
function MovieCard({ movieElement }) {
  const { id, imageUrl, year, rating, category, title } = movieElement;

  return (
    <li className="movie" key={id}>
      <img className="movie__image" src={imageUrl} />
      <div>
        <span className="movie__year">{year}</span>
        <span className="movie__rating">{rating}</span>
        <span className="movie__category">{category}</span>
      </div>

      <div className="movie__bookmark">
        <i className="movie__bookmark-icon" />
      </div>
      <h3 className="movie__title">{title}</h3>
    </li>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  movieElement: {
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    year: PropTypes.string,
    rating: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
  },
};
