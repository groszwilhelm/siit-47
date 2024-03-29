// import { movies } from "../../data/data";
import { useParams, useNavigate } from "react-router-dom";

import "./MovieDetails.css";
import { useEffect, useState } from "react";

async function retrieveMovie(setMovie, movieId) {
  const response = await fetch(`http://localhost:3000/movies/${movieId}`);
  const movie = await response.json();

  setMovie(movie);
}

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { idFromPath } = useParams();
  // const selectedMovie = movies.find((movie) => movie.id === idFromPath);
  const navigate = useNavigate();

  useEffect(() => {
    retrieveMovie(setMovie, idFromPath);
  }, []);

  useEffect(() => {
    if(!movie) {
      navigate('/');
    }
  }, [movie])

  if (!movie) {
    return;
    // return (
    //   <h1>404: Selected movie does not exist anymore!</h1>
    // )
  }

  const { title, imageUrl, category } = movie;

  return (
    <section>
      <header>
        <h3> {title} </h3>
      </header>

      <img src={imageUrl} />

      <p className="movie-detail__category"> Category: {category}</p>
    </section>
  );
}


/**
 *! REST -> Representational State Transfer
 *! Get a list of all resources (ex: movies) GET: /movies 
 *! Get a single a single resource from the server: GET: /movies/:id
 */
