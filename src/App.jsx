import React, { useEffect, useState } from "react";

import "./App.css";

import Home from "./components/home/Home";
import MovieDetails from "./components/movie-details/MovieDetails";

import { Routes, Route, useNavigate } from "react-router-dom";
import CreateMovie from "./components/create-movie/CreateMovie";
import Navbar from "./components/Navbar";
import { retrieveMovies } from "./lib/movies";
import { Register } from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";

export const MovieContext = React.createContext();
export const AuthContext = React.createContext();

function App() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [movies, setMovies] = useState([]);
  const [auth, setAuth] = useState(accessToken);

  useEffect(() => {
    retrieveMovies(setMovies, auth, navigate).catch((error) =>
      console.log(error)
    );
  }, [auth]);

  return (
    // React fragment -> Can also be used as React.Fragment
    <>
      <MovieContext.Provider value={{ movies, setMovies }}>
        <AuthContext.Provider value={{ auth, setAuth }}>
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
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </AuthContext.Provider>
      </MovieContext.Provider>
    </>
  );
}

export default App;
