import "./App.css";

import Home from "./components/home/Home";
import MovieDetails from "./components/movie-details/MovieDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // React fragment -> Can also be used as React.Fragment
    <>
      <BrowserRouter>
        {/* Switch statement */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:idFromPath" element={<MovieDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
