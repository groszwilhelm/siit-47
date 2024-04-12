import React, { useEffect, useState } from "react";

import "./App.css";

import Home from "./components/home/Home";
import MovieDetails from "./components/movie-details/MovieDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMovie from "./components/create-movie/CreateMovie";
import Navbar from "./components/Navbar";
import { retrieveMovies } from './lib/movies';
import { Register } from './components/auth/register/Register';

export const MovieContext = React.createContext();

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    retrieveMovies(setMovies);
  }, []);

  return (
    // React fragment -> Can also be used as React.Fragment
    <>
      <MovieContext.Provider value={{ movies, setMovies }}>
        <BrowserRouter>
          <Navbar />

          {/* Switch statement */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/:idFromPath" element={<MovieDetails />}></Route>
            <Route path="/create-movie" element={<CreateMovie />}></Route>
            <Route
              path="/edit-movie/:idFromPath"
              element={<CreateMovie />}
            ></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </MovieContext.Provider>
    </>
  );
}

export default App;
