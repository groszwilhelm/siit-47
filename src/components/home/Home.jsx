import { MovieContext } from "../../App";
import Carousel from "../Carousel";
import Recommended from "../recommended/Recommended";
import Search from "../search/Search";

import { useState, useEffect, useContext } from "react";

// Version 1
// function retrieveMovies() {
//   return fetch("http://localhost:3000/movies").then((response) =>
//     response.json()
//   );
// }

// Version 2
// async function retrieveMovies(setMovies) {
//   const response = await fetch("http://localhost:3000/movies");
//   const moviesFromServer = await response.json();

//   setMovies(moviesFromServer);
// }

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [movies, setMovies] = useState([]);
  const { movies } = useContext(MovieContext);

  function onSearchChange(_searchTerm) {
    // searchTerm = _searchTerm
    setSearchTerm(_searchTerm);
  }

  // Version 1
  // useEffect(() => {
  //   async function getMovies() {
  //     const moviesFromServer = await retrieveMovies();

  //     setMovies(moviesFromServer);
  //   }

  //   getMovies();
  // }, []);

  // // Version 2
  // useEffect(() => {
  //   retrieveMovies(setMovies);
  // }, []);

  console.log(movies);

  debugger;

  if (!movies?.length) {
    return <h1>There are no movies yet!</h1>;
  }

  return (
    <>
      <Search onSearchChange={onSearchChange} />
      <section>
        <Carousel />
        <Recommended searchTerm={searchTerm} />
      </section>
    </>
  );
}
