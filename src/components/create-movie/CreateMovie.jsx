/**
 * Title
 * Image Url
 * Year
 * Rating
 * Category
 *
 */

import { useNavigate, useParams } from 'react-router-dom';
import "./CreateMovie.css";
import { useContext } from 'react';
import { MovieContext } from '../../App';

export default function CreateMovie() {
  const navigate = useNavigate();
  const { movies } = useContext(MovieContext);
  const { idFromPath } = useParams();
  const selectedMovie = movies.find((movie) => movie.id === idFromPath);

  function saveMovie(event) {
    // Prevents page refresh when form is submitted (Browser default behavior)
    event.preventDefault();
    const formElement = event.target;

    const { title, url, year, rating, category } = formElement;

    const movie = {
      title: title.value,
      imageUrl: url.value,
      year: year.value.substring(0, 4),
      rating: rating.value,
      category: category.value,
    };

    if (idFromPath) {
      fetch(`http://localhost:3000/movies/${idFromPath}`, {
        method: "PUT",
        body: JSON.stringify(movie),
      })
      .then(() => console.log('movie was modified!'))
    } else {
      fetch("http://localhost:3000/movies", {
        method: "POST",
        body: JSON.stringify(movie),
      }).then(() => navigate('/'));
  
      formElement.reset();
    }
  }

  return (
    <form onSubmit={saveMovie}>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          className="form-input"
          id="title"
          type="text"
          required
          minLength={5}
          //  defaultValue={selectedMovie && selectedMovie.title} same as below
          defaultValue={selectedMovie?.title}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="imgUrl">Image Url:</label>
        <input
          name="url"
          className="form-input"
          type="url"
          id="imgUrl"
          required
          defaultValue={selectedMovie?.imageUrl}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="year">Year</label>
        <input
          name="year"
          className="form-input"
          type="number"
          id="year"
          required
          defaultValue={selectedMovie?.year}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="rating">Rating</label>
        <select
          name="rating"
          id="rating"
          required
          defaultValue={selectedMovie?.rating}
        >
          <option disabled>Select one</option>
          <option value="pg">PG</option>
          <option value="ap">AP</option>
          <option value="18+">18+</option>
        </select>
      </fieldset>

      <fieldset>
        <label>Category</label>

        <div>
          <label htmlFor="movie">Movie</label>
          <input
            name="category"
            type="radio"
            value="movie"
            id="movie"
            required
            defaultChecked={selectedMovie?.category.toLowerCase() === "movie"}
          />

          <label htmlFor="series">Tv Series</label>
          <input
            name="category"
            type="radio"
            value="series"
            id="series"
            required
            defaultChecked={selectedMovie?.category.toLowerCase() === "series"}
          />
        </div>
      </fieldset>

      <button>Save movie</button>
    </form>
  );
}
