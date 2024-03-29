import Carousel from "../Carousel";
import Navbar from "../Navbar";
import Recommended from "../recommended/Recommended";
import Search from "../search/Search";

import { useState, useEffect } from 'react';

// Version 1
// function retrieveMovies() {
//   return fetch("http://localhost:3000/movies").then((response) =>
//     response.json()
//   );
// }

// Version 2
async function retrieveMovies(setMovies) {
  const response = await fetch("http://localhost:3000/movies");
  const moviesFromServer = await response.json();

  setMovies(moviesFromServer);
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

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

  // Version 2
  useEffect(() => {
    retrieveMovies(setMovies);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Search onSearchChange={onSearchChange} />
      <section>
        <Carousel movies={movies} />
        <Recommended movies={movies} searchTerm={searchTerm} />
      </section>
    </>
  );
}
